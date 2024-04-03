const Search = () => {
  return (
    <>
    <div className="flex flex-col">
      <div className="relative">
        <input name="search" type="text"  placeholder="What are you looking for?" className="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-black dark:text-white bg-black/5 dark:bg-white/15 border border-black/10 dark:border-white/20 focus:border-black focus:dark:border-white"/>
        <svg className="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current">
          <use href={`/ui.svg#search`}/>
        </svg>
      </div>
        <div className="mt-12">
          <div className="text-sm uppercase mb-2">
            Found results for
          </div>
          <ul className="flex flex-col gap-3">
              <li>
                p
              </li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Search

