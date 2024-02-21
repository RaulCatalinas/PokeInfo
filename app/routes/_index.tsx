import SearchForm from "@/components/SearchForms"
import type { MetaFunction } from "@remix-run/node"

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
