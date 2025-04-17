import { createSignal, onMount } from "solid-js"
import { certificateData } from "../data"
import FilterCertificate from "./FilterCertificate"
import CertificateList from "./CertificateList.astro"

const ITEMS_PER_PAGE = 10

function CertificatePage() {
    const [selectedProviders, setSelectedProviders] = createSignal([])
    const [currentPage, setCurrentPage] = createSignal(1)

    onMount(() => {
        const hasReloaded = sessionStorage.getItem("cert_reload")
        if (!hasReloaded) {
            sessionStorage.setItem("cert_reload", "true")
            location.reload()
        } else {
            sessionStorage.removeItem("cert_reload")
        }
    })

    const handleFilterChange = (updatedProviders) => {
        setSelectedProviders(updatedProviders)
        setCurrentPage(1)
    }

    const filteredCertificates = () => {
        let filtered = certificateData
        if (selectedProviders().length > 0) {
            filtered = certificateData.filter(cert =>
                selectedProviders().includes(cert.provider)
            )
        }
        const pinned = filtered.filter(cert => cert.pinned)
        const unpinned = filtered.filter(cert => !cert.pinned)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
        return [...pinned, ...unpinned]
    }

    const paginatedCertificates = () => {
        const start = (currentPage() - 1) * ITEMS_PER_PAGE
        return filteredCertificates().slice(start, start + ITEMS_PER_PAGE)
    }

    const totalPages = () =>
        Math.ceil(filteredCertificates().length / ITEMS_PER_PAGE)

    const getPageNumbers = () => {
        const total = totalPages()
        const current = currentPage()
        const delta = 1
        const range = []

        for (let i = 1; i <= total; i++) {
            if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
                range.push(i)
            }
        }

        const finalRange = []
        let last

        for (let i of range) {
            if (last && i - last > 1) {
                finalRange.push("...")
            }
            finalRange.push(i)
            last = i
        }

        return finalRange
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            <FilterCertificate onFilterChange={handleFilterChange} />

            <CertificateList certificates={paginatedCertificates()} />

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
                            onClick={() => handlePageChange(currentPage() - 1)}
                        >
                            « Prev
                        </button>

                        {getPageNumbers().map((page, i) =>
                            page === "..." ? (
                                <button key={i} className="join-item btn btn-disabled">...</button>
                            ) : (
                                <button
                                    key={i}
                                    className={`join-item btn btn-outline ${currentPage() === page ? "btn-active" : ""}`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            )
                        )}

                        <button
                            className="join-item btn btn-outline"
                            disabled={currentPage() === totalPages()}
                            onClick={() => handlePageChange(currentPage() + 1)}
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
