interface Props {
	direction: string;
	handleClick: () => void;
	glyph: string;
}

export const Arrow = ({ direction, handleClick, glyph }: Props) => (
	<div
		className={`cursor-pointer text-2xl border-2 border-titan-light-blue text-titan-light-blue px-2 py-1${
			direction === 'left' ? ' rotate-180' : ' '
		}`}
		onClick={handleClick}
	>
		{glyph}
	</div>
);
