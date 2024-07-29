import { createSignal } from "solid-js"

const ArrowCertificateCard = ({ image, imageAlt, provider, date, name, link }) => {
  const [isModalOpen, setIsModalOpen] = createSignal(false)

  const openModal = () => {
    document.body.classList.add("modal-open")
    setIsModalOpen(true)
  }

  const closeModal = () => {
    document.body.classList.remove("modal-open")
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="card my-2 rounded-lg">
        <button onClick={openModal} className="p-4 gap-3 flex flex-col items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="flex justify-between w-full">
              <div className="text-xs font-normal opacity-75 px-2 rounded-full content-center bg-black/5 dark:bg-white/10">
                {date}
              </div>
              <div className="px-1 py-0.5 rounded-full text-sm text-white bg-sky-700">
                {provider}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 items-center w-full">
            <div className="flex my-1 text-base font-bold w-full">
              <span className="link-underline link-underline-black">
                {name}
              </span>
            </div>
          </div>
        </button>
      </div>

      {isModalOpen() && (
        <div className="fixed z-50 w-full h-[100vh]" onClick={closeModal}>
          <div className="modal modal-open" onClick={(e) => e.stopPropagation()}>
            <div className="modal-box w-full max-w-4xl md:h-full h-1/2 bg-white dark:bg-black border rounded-md flex flex-col relative">
              <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="py-4">{date}</p>
              <img
                src={image}
                className="md:w-[400px] w-[200px] mx-auto my-4 rounded-lg shadow-lg"
                alt={imageAlt}
              />
              <div className="modal-action mt-auto">
                <button onClick={closeModal} className="btn">
                  Close
                </button>
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}
    </div>
  )
}

export default ArrowCertificateCard
