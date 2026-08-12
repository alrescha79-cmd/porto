let observer = null

function animate() {
  if (observer) observer.disconnect()

  const animateElements = document.querySelectorAll('.animate:not(.show)')
  if (!('IntersectionObserver' in window)) {
    animateElements.forEach((el) => el.classList.add('show'))
    return
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show')
        }, Math.min(index * 60, 300))
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  animateElements.forEach((el) => observer.observe(el))
}

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:page-load", animate)
document.addEventListener("astro:after-swap", animate)
