import {useCallback, useMemo, useState} from 'react';
import {useWindowDimensions, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import styled from 'styled-components/native';

import {ItemSlide} from './item-slide.component';
import {SLIDER_ITEMS} from '../../../constants/data.constant';
import {DARK_COLOR_GROUP} from '../../../constants/themes/dark.color-group.constant';
import {LIGHT_COLOR_GROUP} from '../../../constants/themes/light.color-group.constant';

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

export const ItemSlider = () => {
	const {width} = useWindowDimensions();
	const height = useMemo(() => width * 0.75, [width]);

	const [active, setActive] = useState(0);

	const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
		setActive(Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width));
	}, []);

	const renderSlides = () => SLIDER_ITEMS.map((item) => (
		<ItemSlide key={item.id} item={item} width={width} height={height} />
	));
	const renderDots = () => SLIDER_ITEMS.map((_, i) => <Dot key={i} active={i === active} />);

	return (
		<Container>
			<StyledScrollView pagingEnabled horizontal onScroll={onScroll} showsHorizontalScrollIndicator={false}
												width={width} height={height}>
				{renderSlides()}
			</StyledScrollView>
			<Pagination>{renderDots()}</Pagination>
		</Container>
	);
};
