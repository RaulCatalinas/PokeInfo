interface OptionProps {
	text: string
	value: string
}

export default function Option({ text, value }: OptionProps) {
	return (
		<option className="bg-white text-sm" value={value}>
			{text}
		</option>
	)
}