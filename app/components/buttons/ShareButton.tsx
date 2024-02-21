// Icons
import ShareIcon from "@/icons/share/ShareIcon"

// Controllers
import { shareController } from "@/controllers/share"

export default function ShareButton() {
	return (
		<button
			type="button"
			className="hover:scale-110 active:scale-90"
			id="btn-share"
			onClick={shareController}
		>
			<ShareIcon />
		</button>
	)
}
