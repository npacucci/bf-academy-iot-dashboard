export function formatValue(value: string ): number {
  return value != null && value != '' ? +Number(value).toFixed(2) : 0
}