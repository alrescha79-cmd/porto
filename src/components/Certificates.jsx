import CertificateCard from "../components/CertificateCard"
import { certificateData } from "../data"

function CertificatePage() {
    return (
                <div className="animate md:px-4 flex flex-wrap justify-center items-center border-b-current w-full gap-2 md:w-11/12 mx-auto">
                    {certificateData.map((data) => (
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
    )
}

export default CertificatePage
