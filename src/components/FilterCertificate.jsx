import { createSignal } from "solid-js"
import { certificateData } from "../data"
import { cn } from "../lib/utils"

const FilterCertificate = ({ onFilterChange }) => {
    const uniqueProviders = [...new Set(certificateData.map(certificate => certificate.provider))]
    const [selectedProviders, setSelectedProviders] = createSignal([])

    const toggleProvider = (provider) => {
        setSelectedProviders(prev => {
            const updatedProviders = prev.includes(provider)
                ? prev.filter(p => p !== provider)
                : [...prev, provider]

            onFilterChange(updatedProviders)
            return updatedProviders
        })
    }

    return (
        <div className="md:w-8/12 mx-auto mb-8 w-10/12">
            <div className="flex flex-col md:flex-row items-center w-full">
                <div className="flex flex-col items-start w-full">
                    <h2 className="text-2xl font-bold dark:text-white text-black">Certificates</h2>
                    <p className="text-base font-normal dark:text-white text-black">
                        Here are some of the certificates I have earned.
                    </p>
                </div>
            </div>
            <div className="w-full mt-4 sticky top-0 bg-white dark:bg-black z-10">
                <label className="text-lg font-bold text-black dark:text-white">
                    Filter by Provider
                </label>
                <div className="flex flex-col flex-wrap md:flex-row gap-1 md:gap-2 w-ful">
                    {uniqueProviders.map(provider => (
                        <button
                            key={provider}
                            onClick={() => toggleProvider(provider)}
                            className={cn(
                                "px-2 py-1 rounded",
                                "whitespace-nowrap overflow-hidden overflow-ellipsis",
                                "flex gap-2 items-center",
                                "bg-black/5 dark:bg-white/10",
                                "hover:bg-black/10 hover:dark:bg-white/15",
                                "transition-colors duration-300 ease-in-out",
                                selectedProviders().includes(provider) && "text-black dark:text-white"
                            )}
                        >
                            <svg className={cn(
                                "size-5 fill-black/50 dark:fill-white/50",
                                "transition-colors duration-300 ease-in-out",
                                selectedProviders().includes(provider) && "fill-black dark:fill-white"
                            )}>
                                <use href={`/ui.svg#square`} className={cn(!selectedProviders().includes(provider) ? "block" : "hidden")} />
                                <use href={`/ui.svg#square-check`} className={cn(selectedProviders().includes(provider) ? "block" : "hidden")} />
                            </svg>
                            {provider}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterCertificate
