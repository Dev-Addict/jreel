import {forwardRef} from 'react';
import {Svg, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {SVGProps} from '../../types/svg.props';

interface Props extends SVGProps {}

export const PlayIcon = forwardRef<Svg, Props>(function PlayIcon(
	{size = 24, width = size, height = size, color, ...props},
	ref
) {
	const theme = useTheme();

	return (
		<Svg
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 24 24"
			{...props}
			ref={ref}>
			<Path
				fill={color ?? theme.colors.foreground.m}
				d="M22.1 10.486c1.2.665 1.2 2.362 0 3.029L3.644 23.772C2.464 24.428 1 23.59 1 22.256V1.743C1 .41 2.463-.428 3.644.228L22.1 10.486Z"
			/>
		</Svg>
	);
});

export type PlayIconProps = Props;
