import { Hero } from '../components/common/hero';
import { Main } from '../components/layout/main';
import { Section } from '../components/layout/section';
import { Carousel } from '../components/common/carousel';
import { H2 } from '../components/common/h2';
import { gameSlides } from '../data/links';
import { LinkButton } from '../components/common/linkButton';
import { Logo } from '../components/common/logo';
import { Grid } from '../components/layout/grid';

export const Home = () => {
    return (
        <Main>
            <Hero
                logo={<Logo option='compact' className='h-32' />}
                title='Welcome to Titan Realm Games'
                cover='/images/wompySplash.jpg'
            />
            <Section>
                <H2>Games</H2>
                <Carousel slides={gameSlides} cols={3} />
            </Section>
            <Section>
                <Grid className='items-center'>
                    <Logo className='w-full' />
                    <div className='md:-order-1'>
                        <H2>About</H2>
                        <p className='mb-6 lg:pr-6'>
                            Titan Realm Games is a game studio founded by three
                            college students in search of something epic.
                        </p>
                        <LinkButton
                            link={{ title: 'Learn More', url: '/about' }}
                            glyph='&#10141;'
                        />
                    </div>
                </Grid>
            </Section>
        </Main>
    );
};
