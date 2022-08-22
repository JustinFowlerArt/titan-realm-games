import { H2 } from '../components/common/h2';
import { Hero } from '../components/common/hero';
import { Grid } from '../components/layout/grid';
import { Main } from '../components/layout/main';
import { Section } from '../components/layout/section';
import { GameCard } from '../components/sections/gameCard';
import { Game } from '../data/types';

interface Props {
    games: Game[];
}

export const Games = ({ games }: Props) => {
    return (
        <Main>
            <Hero
                title='Featured Game: Wompatron 9000'
                cover='/images/wompySplash.jpg'
                links={[{ title: 'Learn More', url: '/games/wompatron9000' }]}
            />
            <Section>
                <H2>Featured Games</H2>
                <Grid className='md:mt-3 lg:mt-6'>
                    {games?.map(game => (
                        <GameCard key={game.title} game={game} />
                    ))}
                </Grid>
            </Section>
        </Main>
    );
};
