import { mainNav } from '../../data/links';
import { Logo } from './logo';
import { NavBar } from './navBar';

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center full bg-black p-6 xl:p-12'>
            <Logo option='banner' className='h-12' link={true} />
            <NavBar links={mainNav} />
        </footer>
    );
};
