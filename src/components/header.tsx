import { NavBar } from './common/navBar';
import { LogoBanner } from './common/logoBanner';

interface Props {
	scrollDirection: string;
}

export const Header = ({ scrollDirection }: Props) => {
	return (
		<header
			className={`flex items-center space-x-12 w-full fixed top-0 bg-black z-10${
				scrollDirection === 'up'
					? ' transition-transform ease-in duration-200'
					: scrollDirection === 'down'
					? ' -translate-y-20 transition-transform ease-out duration-200'
					: ''
			}`}
		>
			<LogoBanner height={5} />
			<NavBar />
		</header>
	);
};
