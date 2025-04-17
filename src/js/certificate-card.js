// Function to set up modal functionality
function setupModals() {
    document.querySelectorAll(".certificate-card").forEach((card) => {
        const modalId = card.getAttribute("data-modal-id")
        const modal = document.getElementById(modalId)

        if (!modal) return
        card.addEventListener("click", () => {
            modal.showModal()
            const modalContent = modal.querySelector("#modal-content-loaded")
            const modalSkeleton = modal.querySelector("#modal-skeleton")

            if (modalContent && modalSkeleton) {
                modalContent.classList.add("hidden")
                modalSkeleton.classList.remove("hidden")

                setTimeout(() => {
                    modalContent.classList.remove("hidden")
                    modalSkeleton.classList.add("hidden")
                }, 750)
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

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.open) {
                modal.close()
            }
        })
    })
}

// Function to simulate loading and show content
function simulateLoading() {
    document.querySelectorAll(".certificate-card").forEach(card => {
        const content = card.querySelector("#certificate-content")
        const skeleton = card.querySelector("#skeleton-loading")

        if (content && skeleton) {
            content.classList.add("hidden")
            skeleton.classList.remove("hidden")

            setTimeout(() => {
                content.classList.remove("hidden")
                skeleton.classList.add("hidden")
            }, 750)
        }
    })
}

// Initialize everything when the page loads
function initCertificateCards() {
    setupModals()
    simulateLoading()
}

// Run the setup on page load
document.addEventListener("astro:page-load", initCertificateCards)
document.addEventListener("DOMContentLoaded", initCertificateCards)

// Also run it immediately if the DOM is already loaded
if (document.readyState === "interactive" || document.readyState === "complete") {
    initCertificateCards()
}