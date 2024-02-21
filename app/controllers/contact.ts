// Constants
import { SOCIAL_NETWORKS } from "@/constants/social-networks"

// React
import { ChangeEvent } from "react"

type SocialNetworkKey = keyof typeof SOCIAL_NETWORKS

export function contactController(event: ChangeEvent<HTMLSelectElement>) {
	const socialNetworkKey = event.target.value as SocialNetworkKey
	const socialNetwork = SOCIAL_NETWORKS[socialNetworkKey]

	open(socialNetwork, "_blank")
}
