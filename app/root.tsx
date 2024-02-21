// Remix
import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from "@remix-run/react"

// CSS
import globalCSS from "./css/global.css"
import tailwindBase from "./tailwind.css"

// Third-Party CSS
import toastifyCSS from "toastify-js/src/toastify.css"

// Components
import Header from "./components/headers/Header"

export const meta: MetaFunction = () => {
	return [
		{ title: "PokeInfo" },
		{ name: "description", content: "Website for information about Pokemon" }
	]
}

export const links: LinksFunction = () => [
	{
		rel: "preload",
		href: "/fonts/inter-latin-400-normal.woff2",
		as: "font",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: globalCSS
	},
	{
		rel: "stylesheet",
		href: tailwindBase
	},
	{
		rel: "stylesheet",
		href: toastifyCSS
	}
]

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
