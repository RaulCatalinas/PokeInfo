// Remix
import type { MetaFunction } from "@remix-run/node"

// Components
import ShareButton from "@/components/buttons/ShareButton"
import DropdownContact from "@/components/dropdowns/DropdownContact"
import DropdownLanguage from "@/components/dropdowns/DropdownLanguage"
import SearchForm from "@/components/forms/SearchForms"

export const meta: MetaFunction = () => {
	return [
		{ title: "PokeInfo" },
		{ name: "description", content: "Website for information about Pokemon" }
	]
}

export default function Index() {
	return (
		<>
			<header className="p-2 m-3 bg-green-700 flex flex-row items-center justify-center gap-4">
				<DropdownContact />
				<DropdownLanguage />
				<ShareButton />
			</header>
			<main>
				<SearchForm />
			</main>
		</>
	)
}
