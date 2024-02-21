import type { ChangeEventHandler, PropsWithChildren } from "react"

interface DropdownLayoutProps {
	id: string
	labelText: string
	onChange?: ChangeEventHandler<HTMLSelectElement>
}

export default function DropdownLayout({
	id,
	labelText,
	onChange,
	children
}: PropsWithChildren<DropdownLayoutProps>) {
	return (
		<div className="flex flex-col items-center justify-center">
			<label htmlFor={id} className="text-lg mb-2 block text-white text-center">
				{labelText}
			</label>
			<select
				id={id}
				className="p-2 text-base rounded cursor-pointer focus:border-blue-500"
				onChange={onChange}
			>
				{children}
			</select>
		</div>
	)
}
