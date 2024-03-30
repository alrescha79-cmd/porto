const Card = ({ title, items }) => {
    return (
        <div className="w-[350px] mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-black/15 dark:border-neutral-700 ">
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center bg-black/10 dark:bg-white/10 py-4">
                {title}
            </h5>
            <div className="flow-root p-4">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {items.map((item, index) => (
                        <CardItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    )
}


const CardItem = ({ item }) => {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={item.image} alt={item.alt} />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-xl font-semibold text-black/90  dark:text-white/90">
                        {item.name}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Card
