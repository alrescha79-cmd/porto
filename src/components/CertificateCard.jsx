import { createSignal } from "solid-js"

const CertificateCard = ({ image, imageAlt, provider, date, name, link }) => {
  const [selectedCertificate, setSelectedCertificate] = createSignal(null)

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    document.getElementById("my_modal").showModal()
  }

  const closeModal = () => {
    document.getElementById("my_modal").close()
    setSelectedCertificate(null)
  }

  const certificate = { image, imageAlt, provider, date, name, link }

  return (
    <div className="max-w-sm mb-6 md:mb-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
      <div>
        <button className="w-full h-full text-left" onClick={() => openModal(certificate)}>
          <img
            src={image}
            className="w-72 h-64 m-auto mb-4 rounded-lg shadow-none transition duration-500 ease-in-out group-hover:shadow-lg"
            alt={imageAlt}
          />
          <div className="flex items-center mb-3">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-sky-700">
              {provider}
            </span>
            <p className="ml-auto font-mono text-xs font-normal opacity-75">
              {date}
            </p>
          </div>
          <p className="flex items-center font-display h-11 max-w-[300px] text-base font-bold">
            <span className="link-underline link-underline-black">
              {name.length > 65 ? `${name.slice(0, 65)}...` : name}
            </span>
          </p>
        </button>

        {selectedCertificate() && (
          <dialog id="my_modal" className="modal">
            <div className="modal-box bg-white dark:bg-black border">
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

export default CertificateCard
