interface Props {
	children?: React.ReactNode;
}

export const Main = ({ children }: Props) => {
	return (
		<main className='pt-20 flex flex-col items-center w-full'>{children}</main>
	);
};
