import { Hero } from '../components/common/hero';
import { Logo } from '../components/common/logo';
import { Main } from '../components/layout/main';

export const About = () => {
    return (
        <Main>
            <Hero
                logo={<Logo option='compact' className='h-32' />}
                title='Welcome to Titan Realm Games'
                cover='/images/wompySplash.jpg'
            />
        </Main>
    );
};
