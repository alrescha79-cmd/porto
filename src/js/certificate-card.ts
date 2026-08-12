function setupModals(): void {
  document.querySelectorAll<HTMLElement>(".certificate-card").forEach((card) => {
    if (card.dataset.modalInited) return
    card.dataset.modalInited = "true"

    const modalId = card.getAttribute("data-modal-id")
    const modal = modalId
      ? (document.getElementById(modalId) as HTMLDialogElement | null)
      : null

    if (!modal) return

    card.addEventListener("click", () => {
      modal.showModal()
      const modalContent = modal.querySelector<HTMLElement>("#modal-content-loaded")
      const modalSkeleton = modal.querySelector<HTMLElement>("#modal-skeleton")

      if (modalContent && modalSkeleton) {
        modalContent.classList.remove("hidden")
        modalSkeleton.classList.add("hidden")
      }
    })

    modal.querySelectorAll(".close-modal-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()
        modal.close()
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
          modal.close()
        }
      }
    })

    modal.querySelector(".modal-content")?.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  })
}

function revealContent(): void {
  document.querySelectorAll<HTMLElement>(".certificate-card").forEach((card) => {
    const content = card.querySelector<HTMLElement>("#certificate-content")
    const skeleton = card.querySelector<HTMLElement>("#skeleton-loading")

    if (content && skeleton) {
      content.classList.remove("hidden")
      skeleton.classList.add("hidden")
    }
  })
}

function initCertificateCards(): void {
  setupModals()
  revealContent()
}

document.addEventListener("astro:page-load", initCertificateCards)
