
export default async ({ entry, balances }) => {
  const date = new Date()
  const balance = {
    hours: date.getHours() - entry.hours,
    minutes: date.getMinutes() - entry.minutes
  }
  if (balance.minutes < 0) {
    balance.minutes += 60
    balance.hours -= 1
  }

  console.log(balance)
}
