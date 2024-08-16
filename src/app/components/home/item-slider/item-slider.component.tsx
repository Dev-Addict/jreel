import {FC, useCallback, useMemo, useState} from 'react';
import {
	useWindowDimensions,
	NativeSyntheticEvent,
	NativeScrollEvent,
} from 'react-native';
import styled from 'styled-components/native';

import {ItemSlide} from './item-slide.component';
import {DARK_COLOR_GROUP} from '../../../../constants/themes/dark.color-group.constant';
import {LIGHT_COLOR_GROUP} from '../../../../constants/themes/light.color-group.constant';
import {SlideData} from '../../../../types/api/items/slide-data.type';
import {ItemSlideSkeleton} from './item-slide.skeleton';

const Container = styled.View`
	align-items: center;
`;

interface ScrollViewProps {
	width: number;
	height: number;
}

const StyledScrollView = styled.ScrollView<ScrollViewProps>`
	${({width, height}) => ({width, height})}
`;

const Pagination = styled.View`
	position: absolute;
	bottom: 10px;
	width: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: ${DARK_COLOR_GROUP.m}88;
	padding: 4px;
	border-radius: 6px;
	gap: 4px;
`;

interface DotProps {
	active: boolean;
}

const Dot = styled.View<DotProps>`
	width: 24px;
	height: 8px;
	border-radius: 4px;
	background-color: ${LIGHT_COLOR_GROUP.m};
	opacity: ${({active}) => (active ? 1 : 0.5)};
`;

interface Props {
	items: SlideData[];
	skeleton?: boolean;
}

export const ItemSlider: FC<Props> = ({items, skeleton}) => {
	const {width} = useWindowDimensions();
	const height = useMemo(() => width * 0.75, [width]);

	const [active, setActive] = useState(0);

	const onScroll = useCallback(
		(event: NativeSyntheticEvent<NativeScrollEvent>) => {
			setActive(
				Math.ceil(
					event.nativeEvent.contentOffset.x /
						event.nativeEvent.layoutMeasurement.width
				)
			);
		},
		[]
	);

	const renderSlides = () =>
		skeleton
			? [<ItemSlideSkeleton width={width} height={height} key={0} />]
			: items.map((item) => (
					<ItemSlide
						key={item.slug}
						item={item}
						width={width}
						height={height}
					/>
				));
	const renderDots = () =>
		(skeleton ? [0] : items).map((_, i) => (
			<Dot key={i} active={i === active} />
		));

	return (
		<Container>
			<StyledScrollView
				pagingEnabled
				horizontal
				onScroll={onScroll}
				showsHorizontalScrollIndicator={false}
				width={width}
				height={height}>
				{renderSlides()}
			</StyledScrollView>
			<Pagination>{renderDots()}</Pagination>
		</Container>
	);
};
