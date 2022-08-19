import { Feature } from '../../data/types';
import { H2 } from '../common/h2';

interface Props {
	feature: Feature;
	mobile: boolean;
}

export const FeatureDetail = ({ feature, mobile }: Props) => {
	return (
		<div
			className={`flex flex-col items-center justify-center w-full px-6 text-center aspect-video bg-cover bg-gray-500 bg-blend-multiply 
                ${mobile ? 'aspect-[9/16]' : 'aspect-video'}`}
			style={{
				backgroundImage: `url(${feature.backgroundImage})`,
			}}
		>
			<H2>{feature.title}</H2>
			<p>{feature.description}</p>
		</div>
	);
};
