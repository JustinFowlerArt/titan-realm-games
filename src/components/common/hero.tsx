interface Props {
	logo?: React.ReactNode;
	title?: React.ReactNode;
	cover: string;
}

export const Hero = ({ logo, title, cover }: Props) => {
	return (
		<div
			className='flex items-center justify-center w-full bg-cover bg-center'
			style={{
				backgroundImage: `url(.${cover})`,
				minHeight: 'calc(100vh - 5rem)',
			}}
		>
			<div className='flex flex-col items-center'>
				{logo}
				<h1 className='text-2xl text-center font-bold text-titan-light-blue px-6 lg:text-5xl'>
					{title}
				</h1>
			</div>
		</div>
	);
};
