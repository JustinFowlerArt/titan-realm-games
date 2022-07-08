import { NavBar } from './navBar';
import { LogoBanner } from './logoBanner';

interface Props {
	scrollDirection: string;
}

export const Header = ({ scrollDirection }: Props) => {
	return (
		<header
			className={`flex items-center space-x-12 w-full bg-black z-10${
				scrollDirection === 'up'
					? ' fixed top-0'
					: scrollDirection === 'down'
					? ' hidden'
					: ' fixed top-0'
			}`}
		>
			<LogoBanner />
			<NavBar />
		</header>
	);
};
