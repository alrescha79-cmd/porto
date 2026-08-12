export const ITEMS_PER_PAGE = 10

export function getPageNumbers(total: number, current: number): (number | "...")[] {
  const delta = 1
  const range: number[] = []
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i)
    }
  }

  const result: (number | "...")[] = []
  let last: number | undefined
  for (const i of range) {
    if (last && i - last > 1) {
      result.push("...")
    }
    result.push(i)
    last = i
  }
  return result
}

export function clampPage(page: number, total: number): number {
  if (total < 1) return 1
  return Math.min(Math.max(page, 1), total)
}