import { Feature } from '../../data/types';

interface Props {
    feature: Feature;
    mobile: boolean;
    className?: string;
}

export const FeatureImage = ({ feature, mobile, className }: Props) => {
    return (
        <div
            className={`w-full aspect-video bg-cover ${className} ${
                mobile
                    ? 'aspect-[9/16] col-span-1'
                    : 'aspect-video col-span-2 md:col-span-1'
            }`}
            style={{
                backgroundImage: `url(${feature.image})`,
            }}
        ></div>
    );
};
