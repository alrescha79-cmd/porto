import React from "react"
import { certificateData } from "../data"

const FilterCertificate = () => {
    const uniqueProviders = [...new Set(certificateData.map(certificate => certificate.provider))]

    return (
        <>
            <div className="md:w-full mx-auto mb-8 w-10/12">
                <div className="flex flex-col md:flex-row items-center w-full">
                    <div className="flex flex-col items-start w-full">
                        <h2 className="text-2xl font-bold dark:text-white text-black">Certificates</h2>
                        <p className="text-base font-normal dark:text-white text-black">
                            Here are some of the certificates I have earned.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center w-full">
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="filter" className="text-base font-bold text-white dark:text-black">
                            Filter by:
                        </label>
                        <select
                            name="filter"
                            id="filter"
                            className="w-full mt-1 p-2 text-base font-normal text-black dark:text-white bg-white dark:bg-black backdrop:border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/80 dark:focus:ring-white/80 focus:border-transparent"
                        >
                            <option value="all">All</option>
                            {uniqueProviders.map(provider => (
                                <option key={provider} value={provider.toLowerCase()}>
                                    {provider}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterCertificate