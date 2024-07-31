import { createSignal } from "solid-js"
import CertificateCard from "../components/CertificateCard"
import { certificateData } from "../data"
import FilterCertificate from "./FilterCertificate"

function CertificatePage() {
    const [selectedProviders, setSelectedProviders] = createSignal([])

    const handleFilterChange = (updatedProviders) => {
        setSelectedProviders(updatedProviders)
    }

    const filteredCertificates = () => {
        if (selectedProviders().length === 0) {
            return certificateData
        }
        return certificateData.filter(cert => selectedProviders().includes(cert.provider))
    }

    return (
        <>
            <FilterCertificate onFilterChange={handleFilterChange} />
            <div className="w-full md:w-10/12 mx-auto">
                <h1 className="text-xl font-bold text-center">
                    Showing {filteredCertificates().length} of {certificateData.length} Certificates
                </h1>
            </div>
            <div className="animate md:px-4 flex flex-wrap justify-center items-center border-b-current w-full gap-2 md:w-11/12 mx-auto">
                {filteredCertificates().map((data) => (
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
        </>
    )
}

export default CertificatePage
