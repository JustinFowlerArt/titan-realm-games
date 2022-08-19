import { Feature } from '../../data/types';

interface Props {
	feature: Feature;
	mobile: boolean;
}

export const FeatureImage = ({ feature, mobile }: Props) => {
	return (
		<div
			className={`w-full aspect-video bg-cover 
                ${mobile ? 'aspect-[9/16]' : 'aspect-video'}`}
			style={{
				backgroundImage: `url(${feature.image})`,
			}}
		></div>
	);
};
