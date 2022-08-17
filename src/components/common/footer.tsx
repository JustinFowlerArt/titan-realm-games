import { mainNav } from '../../data/links';
import { LogoBanner } from './logoBanner';
import { NavBar } from './navBar';

export const Footer = () => {
	return (
		<footer className='flex flex-col items-center full bg-black p-6 lg:mt-20 xl:p-12'>
			<LogoBanner height={3} />
			<NavBar links={mainNav} />
		</footer>
	);
};
