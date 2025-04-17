import { createSignal, onMount } from "solid-js"

const Card = ({ title, items }) => {
    const [loading, setLoading] = createSignal(true)

    onMount(() => {
        setTimeout(() => {
            setLoading(false)
        }, 750)
    })

    return (
        <div className="w-[350px] mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-black/15 dark:border-neutral-700">
            {loading() ? (
                // Skeleton loading state
                <div className="skeleton-card">
                    <h5 className="text-2xl font-bold text-center py-4 bg-gray-300 dark:bg-gray-700 skeleton">
                        &nbsp;
                    </h5>
                    <div className="flow-root p-4">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-500">
                            <SkeletonItems count={items.length} />
                        </ul>
                    </div>
                </div>
            ) : (
                // Actual content
                <div className="card-content">
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center bg-black/10 dark:bg-white/10 py-4">
                        {title}
                    </h5>
                    <div className="flow-root p-4">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-500">
                            {items.map((item, index) => (
                                <CardItem key={index} item={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

const SkeletonItems = ({ count }) => {
    const skeletons = Array.from({ length: count })

    return (
        <>
            {skeletons.map((_, index) => (
                <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 skeleton"></div>
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-xl font-medium h-6 bg-gray-300 dark:bg-gray-700 rounded-md skeleton">
                                &nbsp;
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </>
    )
}

const CardItem = ({ item }) => {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={item.image} alt={item.alt || item.name} />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-xl font-semibold text-black/90 dark:text-white/90">
                        {item.name}
                    </p>
                </div>
            </div>
        </li>
    )
}


export default Card