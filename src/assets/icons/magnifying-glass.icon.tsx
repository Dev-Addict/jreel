import {forwardRef} from 'react';
import {Svg, Path, G, Defs, ClipPath} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {SVGProps} from '../../types/svg.props';

interface Props extends SVGProps {
}

export const MagnifyingGlassIcon = forwardRef<Svg, Props>(function MagnifyingGlassIcon({
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
			<G clipPath="url(#a)">
				<Path
					fill={color ?? theme.colors.foreground.m}
					d="M15.933 18.833a9.959 9.959 0 0 1-12.969-1.16c-3.952-4.043-3.952-10.598 0-14.641a9.966 9.966 0 0 1 14.317 0c3.34 3.417 3.858 8.63 1.551 12.602l4.58 4.681a2.095 2.095 0 0 1 0 2.906l-.175.178a1.986 1.986 0 0 1-1.42.601 1.986 1.986 0 0 1-1.42-.601l-4.464-4.566Zm-5.81-1.396a6.849 6.849 0 0 0 4.897-2.075 7.166 7.166 0 0 0 2.029-5.01c0-1.878-.73-3.68-2.029-5.008a6.849 6.849 0 0 0-4.897-2.075 6.849 6.849 0 0 0-4.898 2.075 7.166 7.166 0 0 0-2.029 5.009c0 1.879.73 3.68 2.03 5.009a6.849 6.849 0 0 0 4.897 2.074Z"
				/>
			</G>
			<Defs>
				<ClipPath id="a">
					<Path fill="#fff" d="M0 0h24v24H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	);
});

export type MagnifyingGlassIcon = Props;
