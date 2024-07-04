import React from "react"
import CertificateCard from "../components/CertificateCard"
import { certificateData } from "../data"

function CertificatePage() {
    return (
                <div className="animate container flex flex-wrap justify-center items-center border-b-current w-full gap-2">
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
