import {FC} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

import SkeletonLoader from 'expo-skeleton-loader';

const Gradient = styled(LinearGradient)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 50%;
`;

interface Props {
	width: number;
	height: number;
}

export const ItemSlideSkeleton: FC<Props> = ({width, height}) => {
	const theme = useTheme();

	return (
		<SkeletonLoader
			boneColor={theme.colors.neutral.v3}
			highlightColor={theme.colors.neutral.v4}
			duration={1000}>
			<SkeletonLoader.Container
				style={{
					width,
					height,
					minWidth: width,
					minHeight: height,
					maxWidth: width,
					maxHeight: height,
				}}>
				<SkeletonLoader.Item style={{width, height}} />
				<Gradient
					colors={[theme.colors.neutral.v5 || '#000000', 'transparent']}
				/>
			</SkeletonLoader.Container>
		</SkeletonLoader>
	);
};
