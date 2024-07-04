import React from "react"

const ArrowSkillsCard = ({ title, items }) => {
  return (
    <div className="p-4 gap-3 flex flex-col items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
      <div className="w-full flex flex-col">
        <p className="flex my-1 text-base font-bold w-full">
          <span className="link-underline link-underline-black">
            {title}
          </span>
        </p>
        <ul className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <li className="text-xs uppercase py-0.5 px-2 rounded-full bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75" key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ArrowSkillsCard
