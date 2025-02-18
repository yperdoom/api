
import contract from '../docs/contract_calculateDayTime.json' with {type: 'json'}
import verifyContract from '../../../library/function/verifyContract.js'

import calculateBalance from '../functions/calculateBalance.js'
import calculateRemainingTime from '../functions/calculateRemainingTime.js'
import calculeDayBalance from '../functions/calculeDayBalance.js'

export default async (requisition, response, next) => {
  const { entry_1, exit_1, entry_2, exit_2, other_points } = requisition.body

  const verify = verifyContract.verify(contract, requisition?.body)
  // console.log(verify)
  if (verify != false) {
    return response.send({
      success: false,
      message: verify.message,
      body: verify.fields
    })
  }

  let balances = []

  if (entry_1 && exit_1) {
    balances.push(await calculateBalance({
      entry: entry_1,
      exit: exit_1
    }))
  }

  if (entry_2 && exit_2) {
    balances.push(await calculateBalance({
      entry: entry_2,
      exit: exit_2
    }))
  }

  if (entry_2 && !exit_2) {
    await calculateRemainingTime({
      entry: entry_2,
      balances
    })
  }

  const dayBalance = await calculeDayBalance(balances)

  console.log('dayBalance: ', dayBalance)

  return response.status(204).json({
    success: true,
    message: "Balanço diário calculado com sucesso!",
    body: dayBalance
  })
}

// sim({
//   body: {
//     entry_1: {
//       hours: 10,
//       minutes: 11
//     },
//     exit_1: {
//       hours: 12,
//       minutes: 10
//     },
//     entry_2: {
//       hours: 13,
//       minutes: 45
//     },
//     exit_2: {
//       hours: 20,
//       minutes: 12
//     }
//   }
// })