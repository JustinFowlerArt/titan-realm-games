import { Carousel } from './common/carousel';

export const Games = () => {
	return (
		<div className='flex flex-col items-center p-20'>
			<h2 className='text-2xl font-semibold text-titan-light-blue mb-6'>
				Games
			</h2>
			<Carousel />
		</div>
	);
};
