import { Feature } from '../data/types';
import { H2 } from './common/h2';

export const FeatureDetail = ({ feature }: { feature: Feature }) => {
	return (
		<div
			className='flex flex-col items-center justify-center h-full bg-cover bg-gray-500 bg-blend-multiply'
			style={{
				backgroundImage: `url(${feature.backgroundImage})`,
			}}
		>
			<H2>{feature.title}</H2>
			<p>{feature.description}</p>
		</div>
	);
};
