import { Hero } from '../components/common/hero';
import { Main } from '../components/layout/main';

export const Contact = () => {
    return (
        <Main>
            <Hero
                title='We Want to Hear From You'
                links={[
                    { title: 'Email', url: 'mailto:titanrealmgames@gmail.com' },
                ]}
            />
        </Main>
    );
};
