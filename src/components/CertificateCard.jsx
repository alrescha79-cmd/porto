import React from "react"

const CertificateCard = ({ image, imageAlt, provider, date, name, link }) => {
  return (
    <div className="max-w-sm mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg">
      <div className="">
        <a href={link} target="_blank">
          <img
            src={image}
            class="w-72 mb-4 rounded-lg shadow-none transition duration-500 ease-in-out group-hover:shadow-lg"
            alt={imageAlt}
          />
          <div class="flex items-center mb-3">
            <span
              class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-sky-700"
            >
              {provider}
            </span>
            <p class="ml-auto font-mono text-xs font-normal opacity-75">
              {date}
            </p>
          </div>
          <p class="flex items-center font-display h-11 max-w-[300px] text-base font-bold">
            <span class="link-underline link-underline-black">
              {name.length > 65 ? `${name.slice(0, 65)}...` : name}
            </span>
          </p>
        </a>
      </div>
    </div>
  )
}

export default CertificateCard
