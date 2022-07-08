import { Hero } from './hero';
import { Games } from './games';

export const Home = () => {
	return (
		<main className='pt-20'>
			<Hero />
			<Games />
		</main>
	);
};
