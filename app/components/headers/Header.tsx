import ShareButton from "@/components/buttons/ShareButton"
import DropdownContact from "@/components/dropdowns/DropdownContact"
import DropdownLanguage from "@/components/dropdowns/DropdownLanguage"

export default function Header() {
	return (
		<header className="p-2 m-3 bg-green-700 flex flex-row items-center justify-center gap-4">
			<DropdownContact />
			<DropdownLanguage />
			<ShareButton />
		</header>
	)
}
