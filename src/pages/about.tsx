import { H2 } from '../components/common/h2';
import { Hero } from '../components/common/hero';
import { Logo } from '../components/common/logo';
import { Main } from '../components/layout/main';
import { Section } from '../components/layout/section';

export const About = () => {
    return (
        <Main>
            <Hero
                logo={<Logo option='compact' className='h-32' />}
                title='Where It Started'
                cover='/images/gameJam.jpg'
                className='lg:bg-center'
            />
            <Section>
                <div className='space-y-6 text-center w-2/3'>
                    <H2>About Us</H2>
                    <p>
                        Originally founded in 2011 as Bladed Cyber Technologies
                        while we were attending college together online, we have
                        gone through several transformations that led us to
                        relaunching in 2020 as Titan Realm Games.
                    </p>
                    <p>
                        We have created several mobile games and apps and
                        competed in multiple game jams as we grew as developers
                        until we were ready to embark on a new adventure,
                        leading us to our first in person meetup and game jam in
                        2022. The result of this jam was our first fully
                        realized mobile game, Wompy Idle.
                    </p>
                </div>
            </Section>
        </Main>
    );
};
