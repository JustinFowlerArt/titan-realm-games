import { NavBar } from './navBar';
import { LogoBanner } from './logoBanner';
import { useState } from 'react';
import { mainNav } from '../../data/links';

interface Props {
	scrollDirection: string;
}

export const Header = ({ scrollDirection }: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<header
			className={`w-full fixed top-0 min-h-[5rem] bg-black z-10 ${
				scrollDirection === 'up'
					? 'transition-transform ease-in duration-200'
					: scrollDirection === 'down'
					? '-translate-y-20 transition-transform ease-out duration-200'
					: ''
			}`}
		>
			<div className='flex lg:hidden w-full justify-between items-center p-3'>
				<LogoBanner height={3} />
				<i
					className='fa-solid fa-bars text-titan-light-blue text-2xl p-3'
					onClick={() => setOpen(!open)}
				></i>
			</div>
			{open && (
				<div className='lg:hidden'>
					<NavBar links={mainNav} />
				</div>
			)}
			<div className='hidden items-center lg:flex xl:space-x-8'>
				<LogoBanner height={5} />
				<NavBar links={mainNav} />
			</div>
		</header>
	);
};
