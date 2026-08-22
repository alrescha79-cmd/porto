const CLOSE_ANIMATION_MS = 220

function closeModalWithAnimation(modal: HTMLDialogElement): void {
  if (!modal.open || modal.classList.contains("modal-closing")) return
  modal.classList.add("modal-closing")
  setTimeout(() => {
    modal.close()
    modal.classList.remove("modal-closing")
  }, CLOSE_ANIMATION_MS)
}

function setupModals(): void {
  document.querySelectorAll<HTMLElement>(".certificate-card").forEach((card) => {
    if (card.dataset.modalInited) return
    card.dataset.modalInited = "true"

    const modalId = card.getAttribute("data-modal-id")
    const modal = modalId
      ? (document.getElementById(modalId) as HTMLDialogElement | null)
      : null

    if (!modal) return

    card.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      if (target.closest("dialog")) return
      modal.showModal()
    })

    modal.querySelectorAll(".close-modal-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()
        closeModalWithAnimation(modal)
      })
    })

    modal.addEventListener("click", (e) => {
      const modalContent = modal.querySelector(".modal-content")
      if (modalContent) {
        const rect = modalContent.getBoundingClientRect()
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          closeModalWithAnimation(modal)
        }
      }
    })

    modal.addEventListener("cancel", (e) => {
      e.preventDefault()
      closeModalWithAnimation(modal)
    })
  })
}

function initCertificateCards(): void {
  setupModals()
}

document.addEventListener("DOMContentLoaded", initCertificateCards)
document.addEventListener("astro:page-load", initCertificateCards)
document.addEventListener("astro:after-swap", initCertificateCards)
