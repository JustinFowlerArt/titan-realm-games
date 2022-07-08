import { LogoCompact } from './common/logoCompact';

export const Hero = () => {
	return (
		<div
			className='flex items-center justify-center bg-cover'
			style={{
				backgroundImage: 'url(./images/wompySplash.jpg)',
				minHeight: 'calc(100vh - 5rem)',
			}}
		>
			<div className='flex flex-col items-center'>
				<LogoCompact />
				<p className='text-5xl font-bold text-titan-light-blue'>
					Welcome to Titan Realm Games
				</p>
			</div>
		</div>
	);
};
