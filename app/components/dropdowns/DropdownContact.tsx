// Components
import DropdownLayout from "@/layouts/DropdownLayout"
import Option from "./Option"

// Controllers
import { contactController } from "@/controllers/contact"

export default function DropdownContact() {
	return (
		<DropdownLayout
			id="contact-method"
			labelText="Contact method"
			onChange={contactController}
		>
			<Option value="facebook" text="Facebook" />
			<Option value="instagram" text="Instagram" />
			<Option value="twitter" text="Twitter" />
			<Option value="github" text="GitHub" />
		</DropdownLayout>
	)
}
