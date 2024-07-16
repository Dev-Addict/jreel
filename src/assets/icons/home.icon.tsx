import {forwardRef} from 'react';
import {Svg, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {SVGProps} from '../../types/svg.props';

interface Props extends SVGProps {
}

export const HomeIcon = forwardRef<Svg, Props>(function HomeIcon({
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
				d="M20.471 13.065V23h-5.647v-4.968H9.176V23H3.53v-9.935H0L12 1l12 12.065h-3.529Z"
			/>
		</Svg>
	);
});

export type HomeIconProps = Props;
