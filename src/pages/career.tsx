import { Hero } from '../components/common/hero';
import { Main } from '../components/layout/main';

export const Career = () => {
    return (
        <Main>
            <Hero
                title='Want To Make Some Games?'
                links={[{ title: 'Contact Us', url: '/contact' }]}
            />
        </Main>
    );
};
