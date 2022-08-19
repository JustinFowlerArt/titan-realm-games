import { Hero } from '../components/common/hero';
import { GamesSection } from '../components/gamesSection';
import { AboutSection } from '../components/aboutSection';
import { Main } from '../components/layout/main';
import { LogoCompact } from '../components/common/logoCompact';

export const Home = () => {
	return (
		<Main>
			<Hero
				logo={<LogoCompact />}
				title='Welcome to Titan Realm Games'
				cover='/images/wompySplash.jpg'
			/>
			<GamesSection />
			<AboutSection />
		</Main>
	);
};
