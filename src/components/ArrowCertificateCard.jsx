import React from "react"

const ArrowCertificateCard = ({ image, imageAlt, provider, date, name, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="p-4 gap-3 flex flex-col items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
      <div className="w-full flex flex-col items-center md:items-start">
        <div className="flex justify-between w-full">
          <div className="font-mono text-xs font-normal opacity-75 mb-2">
            {date}
          </div>
          <div className="px-3 rounded-full text-xs font-bold text-white bg-sky-700 mb-2">
            {provider}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 items-center w-full">
        <img
          src={image}
          className="w-40 my-4 rounded-lg shadow-none items-center transition duration-500 ease-in-out group-hover:shadow-lg"
          alt={imageAlt}
        />
        <div className="flex my-1 text-base font-bold w-full">
          <span className="link-underline link-underline-black">
            {name}
          </span>
        </div>
      </div>
    </a>
  ) 
}
export default ArrowCertificateCard