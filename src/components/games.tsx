import { Carousel } from './common/carousel';
import { games } from '../data/data';

export const Games = () => {
	return (
		<div className='flex flex-col items-center px-3 py-6 lg:px-6 xl:p-20'>
			<h2 className='text-2xl font-semibold text-titan-light-blue mb-6'>
				Games
			</h2>
			<Carousel slides={games} />
		</div>
	);
};
