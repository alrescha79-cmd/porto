import { cardData } from "./data.js"
import Card from "./Card"


const Skills = () => {
    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center">
                {cardData.map((card, index) => (
                    <Card key={index} title={card.title} items={card.items} />
                ))}
            </div>
        </>
    )
}

export default Skills