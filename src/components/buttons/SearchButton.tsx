/* eslint-disable no-tabs */

// Controllers
import { onClickController } from '@/controllers/on-click'

// Icons
import SearchIcon from '@/icons/search/SearchIcon'

type ClickEvent = MouseEvent & {
  currentTarget: HTMLButtonElement
  target: Element
}

export default function SearchButton() {
  const handleClick = async (event: ClickEvent) => {
    event.preventDefault()
    await onClickController()
  }

  return (
    <button
      type="submit"
      class={`
				mt-3 p-3 bg-green-600 text-white rounded 
        text-base hover:bg-green-800 hover:cursor-pointer 
        hover:scale-105 active:scale-90 disabled:cursor-not-allowed 
        disabled:bg-slate-600 text-center flex justify-center
			`}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleClick}
    >
      <SearchIcon />
      <span class="text-2xl pl-2">Search</span>
    </button>
  )
}
