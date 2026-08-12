export function toggleFilterButton(btn: HTMLElement, isActive: boolean): void {
  const square = btn.querySelector(".filter-square")
  const check = btn.querySelector(".filter-check")
  if (square && check) {
    square.classList.toggle("hidden", isActive)
    check.classList.toggle("hidden", !isActive)
  }
  btn.classList.toggle("bg-black", isActive)
  btn.classList.toggle("text-white", isActive)
  btn.classList.toggle("dark:bg-white", isActive)
  btn.classList.toggle("dark:text-black", isActive)
}
