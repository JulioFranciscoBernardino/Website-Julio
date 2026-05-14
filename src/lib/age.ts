/** Calcula idade a partir de uma data ISO (YYYY-MM-DD). */
export function calcAge(isoDate: string): number {
  const today = new Date()
  const birth = new Date(isoDate)
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}
