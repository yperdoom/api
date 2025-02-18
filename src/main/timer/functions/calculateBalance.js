
export default async ({ entry, exit }) => {
  const balance = {
    hours: exit.hours - entry.hours,
    minutes: exit.minutes - entry.minutes
  }
  if (balance.minutes < 0) {
    balance.minutes += 60
    balance.hours -= 1
  }

  return balance
}
