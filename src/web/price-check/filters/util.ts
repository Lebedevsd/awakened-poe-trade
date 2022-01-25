
function decimalPlaces (value: number, dp: number | boolean): number {
  if (typeof dp === 'number') {
    return dp
  } else if (!dp || Math.abs(value) >= 10) {
    return 0
  } else {
    return (Math.abs(value) < 2.3) ? 2 : 1
  }
}

export const roundRoll = (value: number, dp: boolean) =>
  percentRoll(value, 0, Math.trunc, dp)

export function percentRoll (
  value: number,
  p: number,
  method: Math['floor'] | Math['ceil'] | Math['trunc'],
  dp: number | boolean = false
): number {
  const res = value + Math.abs(value) * p / 100

  const rounding = Math.pow(10, decimalPlaces(value, dp))
  return method((res + Number.EPSILON) * rounding) / rounding
}

export function percentRollDelta (
  value: number,
  delta: number,
  p: number,
  method: Math['floor'] | Math['ceil'],
  dp = false
): number {
  const res = value + delta * p / 100

  const rounding = Math.pow(10, decimalPlaces(value, dp))
  return method((res + Number.EPSILON) * rounding) / rounding
}
