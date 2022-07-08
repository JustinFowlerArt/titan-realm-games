interface Props {
	height: number;
}

export const LogoBanner = ({ height }: Props) => {
	const styles = {
		height: `${height}rem`,
	};

	return (
		<a href='#'>
			<img src='./images/logoBannerDark.png' style={styles}></img>
		</a>
	);
};
