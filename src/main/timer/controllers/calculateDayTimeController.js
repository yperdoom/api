'use strict'

const contract = require('../docs/contract_calculateDayTime.json')
const verifyContract = require('../../../library/function/verifyContract')

const calculateBalance = require('../functions/calculateBalance')
const calculateRemainingTime = require('../functions/calculateRemainingTime')
const calculeDayBalance = require('../functions/calculeDayBalance')

module.exports.sim = async (requisition, response, next) => {
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

  return response.send({
    success: true,
    message: "Balanço diário calculado com sucesso!",
    body: dayBalance
  })
}

module.exports.sim({
  body: {
    entry_1: {
      hours: 10,
      minutes: 11
    },
    exit_1: {
      hours: 12,
      minutes: 10
    },
    entry_2: {
      hours: 13,
      minutes: 45
    },
    exit_2: {
      hours: 20,
      minutes: 12
    }
  }
})