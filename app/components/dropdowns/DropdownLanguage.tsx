import DropdownLayout from "@/layouts/DropdownLayout"
import Option from "./Option"

export default function DropdownContact() {
	return (
		<DropdownLayout id="select-language" labelText="Select language">
			<Option value="en" text="English" />
			<Option value="es" text="Spanish" />
		</DropdownLayout>
	)
}
