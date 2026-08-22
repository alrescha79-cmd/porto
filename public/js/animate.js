let observer = null

function animate() {
  if (observer) observer.disconnect()

  const animateElements = document.querySelectorAll('.animate:not(.show)')
  if (!('IntersectionObserver' in window)) {
    animateElements.forEach((el) => el.classList.add('show'))
    return
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      }
    })
  }, { 
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  })

  animateElements.forEach((el) => observer.observe(el))
}

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:page-load", animate)
document.addEventListener("astro:after-swap", animate)
