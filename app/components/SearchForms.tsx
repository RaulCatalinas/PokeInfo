import { Form } from "@remix-run/react"

export default function SearchForm() {
	return (
		<div className="flex flex-col items-center m-4 mt-8 mb-8">
			<Form
				className="flex flex-col w-full p-4 border border-gray-200 rounded-md shadow-sm md:w-max"
				method="POST"
			>
				<label
					htmlFor="search"
					className="text-lg font-medium text-white mb-2 text-pretty text-center"
				>
					Pokémon name or Pokédex number{" "}
					<span className="text-red-500 ml-1 inline-block mt-1 font-bold">
						*
					</span>
					:
				</label>
				<input
					type="search"
					name="search"
					id="search"
					className="w-full p-2 text-sm text-gray-700 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-center placeholder:text-center"
					placeholder="Pokémon name or Pokédex number"
				/>
				<button
					type="submit"
					className="mt-3 inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
				>
					<span className="mx-auto">Search</span>
				</button>
			</Form>
		</div>
	)
}
