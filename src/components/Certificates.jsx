import { createSignal, createEffect } from "solid-js"
import CertificateCard from "../components/CertificateCard"
import { certificateData } from "../data"
import FilterCertificate from "./FilterCertificate"

const ITEMS_PER_PAGE = 10

function CertificatePage() {
    const [selectedProviders, setSelectedProviders] = createSignal([])
    const [currentPage, setCurrentPage] = createSignal(1)

    const handleFilterChange = (updatedProviders) => {
        setSelectedProviders(updatedProviders)
        setCurrentPage(1)
    }

    const filteredCertificates = () => {
        if (selectedProviders().length === 0) {
            return certificateData
        }
        return certificateData.filter(cert => selectedProviders().includes(cert.provider))
    }

    const paginatedCertificates = () => {
        const startIndex = (currentPage() - 1) * ITEMS_PER_PAGE
        return filteredCertificates().slice(startIndex, startIndex + ITEMS_PER_PAGE)
    }

    const totalPages = () => Math.ceil(filteredCertificates().length / ITEMS_PER_PAGE)

    createEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [currentPage])

    return (
        <>
            <FilterCertificate onFilterChange={handleFilterChange} />
            <div className="animate md:px-4 flex flex-wrap justify-center items-center border-b-current w-full gap-2 md:w-11/12 mx-auto">
                {paginatedCertificates().map((data) => (
                    <CertificateCard
                        key={data.id}
                        image={data.image}
                        imageAlt={data.name}
                        provider={data.provider}
                        date={data.date}
                        name={data.name}
                        link={data.link}
                    />
                ))}
            </div>
            <div className="w-full md:w-10/12 mx-auto mt-4 mb-1">
                <h1 className="md:text-xl text-base font-bold text-center">
                    Showing {paginatedCertificates().length} of {filteredCertificates().length} Certificates
                </h1>
            </div>
            <div className="w-full md:w-10/12 mx-auto py-4">
                <div className="flex justify-center gap-2">
                    <div className="join">
                        <button
                            className="join-item btn btn-outline"
                            disabled={currentPage() === 1}
                            onClick={() => setCurrentPage(currentPage() - 1)}
                        >
                            « Prev
                        </button>
                        {Array.from({ length: totalPages() }).map((_, index) => (
                            <button
                                className={`join-item btn-outline btn ${currentPage() === index + 1 ? "btn-active" : ""}`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="join-item btn btn-outline"
                            disabled={currentPage() === totalPages()}
                            onClick={() => setCurrentPage(currentPage() + 1)}
                        >
                            Next »
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CertificatePage
