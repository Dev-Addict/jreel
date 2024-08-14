import {FC} from 'react';
import SkeletonLoader from 'expo-skeleton-loader';
import styled, {useTheme} from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

const Gradient = styled(LinearGradient)`
	position: absolute;
	top: 50%;
	right: 0;
	bottom: 0;
	left: 0;
`;

interface Props {
	width: number;
	height: number;
}

export const ItemCardSkeleton: FC<Props> = ({width, height}) => {
	const theme = useTheme();

	return (
		<SkeletonLoader
			boneColor={theme.colors.neutral.v3}
			highlightColor={theme.colors.neutral.v4}
			duration={1000}>
			<SkeletonLoader.Container
				style={{width, height, borderRadius: 8, overflow: 'hidden'}}>
				<SkeletonLoader.Item style={{width, height}} />
				<Gradient
					colors={['transparent', theme.colors.neutral.v5 || '#000000']}
				/>
			</SkeletonLoader.Container>
		</SkeletonLoader>
	);
};
