interface Props {
	children?: React.ReactNode;
}

export const H1 = ({ children }: Props) => {
	return (
		<h1 className='text-2xl text-center font-bold text-titan-light-blue px-6 lg:text-5xl'>
			{children}
		</h1>
	);
};
