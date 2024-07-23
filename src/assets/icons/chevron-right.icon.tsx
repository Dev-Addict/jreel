import {forwardRef} from 'react';
import {Svg, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {SVGProps} from '../../types/svg.props';

interface Props extends SVGProps {
}

export const ChevronRightIcon = forwardRef<Svg, Props>(function ChevronRightIcon({
																																									 size = 24,
																																									 width = size,
																																									 height = size,
																																									 color,
																																									 ...props
																																								 }, ref) {
	const theme = useTheme();

	return (
		<Svg
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 24 24"
			{...props}
			ref={ref}
		>
			<Path
				fill={color ?? theme.colors.foreground.m}
				d="M5.343 1.964C4.76 1.394 4.958.551 5.696.18c.24-.121.509-.183.782-.18.433 0 .854.148 1.139.431l11.045 10.82c.217.207.338.482.338.767 0 .286-.121.56-.338.767L7.613 23.574c-.475.461-1.3.555-1.919.246-.74-.371-.937-1.212-.353-1.783l10.26-10.021L5.343 1.964Z"
			/>
		</Svg>
	);
});

export type ChevronRightIconProps = Props;
