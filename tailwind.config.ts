import type { Config } from "tailwindcss"

export default {
	content: ["./app/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"]
			}
		}
	},
	plugins: []
} satisfies Config
