import { LogoCompact } from './common/logoCompact';

export const Hero = () => {
	return (
		<div
			className='flex items-center justify-center bg-cover bg-center'
			style={{
				backgroundImage: 'url(./images/wompySplash.jpg)',
				minHeight: 'calc(100vh - 5rem)',
			}}
		>
			<div className='flex flex-col items-center'>
				<LogoCompact />
				<h1 className='text-2xl text-center font-bold text-titan-light-blue px-6 lg:text-5xl'>
					Welcome to Titan Realm Games
				</h1>
			</div>
		</div>
	);
};
