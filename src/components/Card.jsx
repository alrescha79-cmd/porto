import { createSignal, createEffect } from "solid-js"

const Card = ({ title, items }) => {
    const [loading, setLoading] = createSignal(true)

    createEffect(() => {
        fetchCardData().then(() => setLoading(false))
    })

    const fetchCardData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    }



    return (
        <div className="w-[350px] mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-black/15 dark:border-neutral-700">
            <h5 className={`text-2xl font-bold text-gray-900 dark:text-white text-center bg-black/10 dark:bg-white/10 py-4 ${loading() ? "skeleton" : "transition duration-300 ease-in"}`} >
                {title}
            </h5>
            <div className="flow-root p-4">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-500">
                    {loading() ? (
                        <SkeletonItems count={items.length} />
                    ) : (
                        items.map((item, index) => (
                            <CardItem key={index} item={item} />
                        ))
                    )}
                </ul>
            </div>
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
                            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-500 skeleton"></div>
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-xl font-semibold bg-gray-300 dark:bg-gray-500 rounded-md skeleton">
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
                <div className={`flex-shrink-0 ${item.image ? "transition duration-300 ease-in" : "skeleton"}`} >
                    <img className="w-8 h-8 rounded-full" src={item.image} alt={item.alt} />
                </div>
                <div className={`flex-1 min-w-0 ms-4 ${item.name ? "transition duration-300 ease-in" : "skeleton"}`} >
                    <p className="text-xl font-semibold text-black/90 dark:text-white/90">
                        {item.name}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Card
