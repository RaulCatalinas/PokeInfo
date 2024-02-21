// Remix
import type { MetaFunction } from "@remix-run/node"

// Components
import SearchForm from "@/components/SearchForms"

export const meta: MetaFunction = () => {
	return [
		{ title: "PokeInfo" },
		{ name: "description", content: "Website for information about Pokemon" }
	]
}

export default function Index() {
	return (
		<main>
			<SearchForm />
		</main>
	)
}
