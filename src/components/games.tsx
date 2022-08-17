import { Carousel } from './common/carousel';
import { gameSlides } from '../data/links';

export const Games = () => {
	return (
		<div
			id='games'
			className='flex flex-col items-center w-full px-3 py-6 lg:px-6 xl:p-20'
		>
			<h2 className='text-3xl font-semibold text-titan-light-blue mb-6'>
				Games
			</h2>
			<Carousel slides={gameSlides} />
		</div>
	);
};
