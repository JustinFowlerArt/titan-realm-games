import { mainNav } from '../data/data';
import { LogoBanner } from './common/logoBanner';
import { NavBar } from './common/navBar';

export const Footer = () => {
	return (
		<footer className='flex flex-col items-center full bg-black p-6 xl:p-12'>
			<LogoBanner height={3} />
			<NavBar links={mainNav} />
		</footer>
	);
};
