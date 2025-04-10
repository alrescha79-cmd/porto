import { createSignal, createEffect } from "solid-js"

const CertificateCard = ({ image, imageAlt, provider, date, name, link, pinned }) => {
  const [selectedCertificate, setSelectedCertificate] = createSignal(null)
  const [loading, setLoading] = createSignal(true)
  const [modalLoading, setModalLoading] = createSignal(true)

  createEffect(() => {
    fetchCertificateData().then(() => setLoading(false))
  })

  const fetchCertificateData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 750)
    })
  }

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    setModalLoading(true)
    document.getElementById("my_modal").showModal()

    fetchCertificateData().then(() => setModalLoading(false))
  }

  const closeModal = () => {
    document.getElementById("my_modal").close()
    setSelectedCertificate(null)
  }

  const certificate = { image, imageAlt, provider, date, name, link, pinned }
  const dateFormatted = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })



  return (
    <div className="max-w-sm mb-6 md:mb-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
      <div>
        {loading() ? (
          <SkeletonCertificateCard />
        ) : (
          <button className="w-full h-full text-left" onClick={() => openModal(certificate)}>
            <img
              src={image}
              className={`w-72 h-64 m-auto mb-4 rounded-lg shadow-none transition duration-500 ease-in-out group-hover:shadow-lg`}
              alt={imageAlt}
            />
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-sky-700">
                {provider}
              </span>
              <div className="flex flex-col"> 
                <p className="ml-auto font-mono text-xs font-normal opacity-75">
                  {dateFormatted}
                </p>
                {pinned && (
                  <p className="ml-auto font-mono font-bold">
                    📌
                  </p>
                )}
                
              </div>
            </div>
            <p className="flex items-center font-display h-11 max-w-[300px] text-base font-bold">
              <span className="link-underline link-underline-black">
                {name.length > 65 ? `${name.slice(0, 65)}...` : name}
              </span>
            </p>
          </button>
        )}

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
                      {selectedCertificate().dateFormatted}
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
                      className="w-full font-bold py-2 text-center text-white dark:text-black bg-black rounded-lg shadow-md hover:bg-black/90 dark:bg-white dark:hover:bg-white/80 transition duration-300 ease-in-out"
                    >
                      View Certificate
                    </a>
                    <button className="w-full font-bold py-2 text-center text-black border-2 border-black rounded-lg shadow-md hover:bg-black/5 dark:text-white dark:border-white dark:hover:bg-white/10 transition duration-300 ease-in-out" onClick={closeModal}>Close</button>
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
    </div>
  )
}

const SkeletonCertificateCard = () => {
  return (
    <div className="max-w-sm mb-6 md:mb-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg border-black/15 dark:border-white/20">
      <div>
        <div className="w-72 h-64 m-auto mb-4 rounded-lg bg-gray-300 dark:bg-gray-700 skeleton"></div>
        <div className="flex items-center mb-3 skeleton">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-gray-300 dark:bg-gray-700 skeleton">
            &nbsp;
          </span>
          <p className="ml-auto font-mono text-xs font-normal opacity-75 skeleton">
            &nbsp;
          </p>
        </div>
        <p className="flex items-center font-display h-11 max-w-[300px] text-base font-bold skeleton">
          &nbsp;
        </p>
      </div>
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

export default CertificateCard
