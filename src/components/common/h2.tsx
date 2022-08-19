interface Props {
	children?: React.ReactNode;
}

export const H2 = ({ children }: Props) => {
	return (
		<h2 className='text-4xl font-bold text-titan-light-blue mb-6'>
			{children}
		</h2>
	);
};
