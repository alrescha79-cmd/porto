import { createSignal, createEffect } from "solid-js"

const ArrowCertificateCard = ({ image, imageAlt, provider, date, name, link }) => {
  const [selectedCertificate, setSelectedCertificate] = createSignal(null)
  const [modalLoading, setModalLoading] = createSignal(true)


// Simulate data fetching
createEffect(() => {
  // Simulate a fetch delay for the main content
  fetchCertificateData().then(() => modalLoading(false))
})

const fetchCertificateData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 750) // Simulating network delay
  })
}

const openModal = (certificate) => {
  setSelectedCertificate(certificate)
  setModalLoading(true)
  document.getElementById("my_modal").showModal()

  // Simulate a fetch delay for the modal content
  fetchCertificateData().then(() => setModalLoading(false))
}

const closeModal = () => {
  document.getElementById("my_modal").close()
  setSelectedCertificate(null)
}

  const certificate = { image, imageAlt, provider, date, name, link }

  return (
    <div className="mb-4 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
      <div className="w-full ">
        <button className="w-full" onClick={() => openModal(certificate)}>
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="flex justify-between w-full">
              <div className="text-xs font-normal opacity-75 px-2 rounded-full content-center bg-black/5 dark:bg-white/10">
                {date}
              </div>
              <div className="px-2 py-0.5 rounded-full text-sm text-white bg-sky-700">
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

      {selectedCertificate() && (
        <dialog id="my_modal" className="modal">
          <div className="modal-box bg-white dark:bg-black border">
            {modalLoading() ? (
              <SkeletonModal />
            ) : (
              <>
                <div className="flex items-center">
                  <span className="inline-flex items-center rounded-full px-2 text-xs leading-5 text-white font-display mr-2 capitalize bg-sky-700">
                    {selectedCertificate().provider}
                  </span>
                  <p className="ml-auto font-mono text-xs opacity-75">
                    {selectedCertificate().date}
                  </p>
                </div>
                <h3 className="font-bold text-lg mt-1 mb-2">{selectedCertificate().name}</h3>
                <img
                  src={selectedCertificate().image}
                  className="w-[380px] md:w-[420px] m-auto mb-4 rounded-lg shadow-none transition duration-500 ease-in-out group-hover:shadow-lg"
                  alt={selectedCertificate().imageAlt}
                />
                <div className="flex flex-col w-full gap-2">
                  <a
                    href={selectedCertificate().link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 text-center text-white bg-sky-700 rounded-lg shadow-md hover:bg-sky-800"
                  >
                    View Certificate
                  </a>
                  <button className="btn w-full" onClick={closeModal}>Close</button>
                </div>
              </>
            )}
          </div>
          <form method="dialog" className="modal-backdrop" onClick={closeModal}>
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  )
}

const SkeletonModal = () => {
  return (
    <>
      <div className="flex items-center skeleton">
        <span className="inline-flex items-center rounded-full px-2 text-xs leading-5 text-white font-display mr-2 capitalize bg-gray-300 dark:bg-gray-700">
          &nbsp;
        </span>
        <p className="ml-auto font-mono text-xs opacity-75 skeleton">
          &nbsp;
        </p>
      </div>
      <h3 className="font-bold text-lg mt-1 mb-2 skeleton">
        &nbsp;
      </h3>
      <div className="w-[380px] md:w-[420px] m-auto mb-4 rounded-lg bg-gray-300 dark:bg-gray-700 skeleton"></div>
      <div className="flex flex-col w-full gap-2 skeleton">
        <div className="w-full py-2 text-center text-white bg-gray-300 dark:bg-gray-700 rounded-lg skeleton">
          &nbsp;
        </div>
        <div className="btn w-full skeleton">
          &nbsp;
        </div>
      </div>
    </>
  )
}

export default ArrowCertificateCard
