import { LogoBanner } from './common/logoBanner';
import { NavBar } from './common/navBar';

export const Footer = () => {
	return (
		<footer className='flex flex-col items-center space-y-6 full p-12 bg-black'>
			<LogoBanner height={3} />
			<NavBar />
		</footer>
	);
};
