import {forwardRef} from 'react';
import {Svg, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {SVGProps} from '../../types/svg.props';

interface Props extends SVGProps {
}

export const DownloadIcon = forwardRef<Svg, Props>(function DownloadIcon({
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
				fillRule="evenodd"
				d="M8.5 1.5h7v8.25h3.428L12 16.5 5.072 9.75H8.5V1.5ZM0 21a1.5 1.5 0 0 1 1.5-1.5h21a1.5 1.5 0 0 1 0 3h-21A1.5 1.5 0 0 1 0 21Z"
				clipRule="evenodd"
			/>
		</Svg>
	);
});

export type DownloadIconProps = Props;
