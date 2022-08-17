import { Hero } from './common/hero';
import { Games } from './games';
import { About } from './about';
import { Main } from './common/main';
import { LogoCompact } from './common/logoCompact';

export const Home = () => {
	return (
		<Main>
			<Hero
				logo={<LogoCompact />}
				title='Welcome to Titan Realm Games'
				cover='/images/wompySplash.jpg'
			/>
			<Games />
			<About />
		</Main>
	);
};
