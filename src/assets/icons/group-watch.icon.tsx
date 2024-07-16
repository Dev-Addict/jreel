import {forwardRef} from 'react';
import {Svg, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {SVGProps} from '../../types/svg.props';

interface Props extends SVGProps {
}

export const GroupWatchIcon = forwardRef<Svg, Props>(function GroupWatchIcon({
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
				d="M17.391 13.604c.031.151.499 5.078.329 6.03C17.475 21.016 15.785 22 12.166 22c-3.487 0-5.268-1.186-5.609-2.6-.326-1.344.32-5.884.351-6.031.789-3.765 3.958-3.963 5.053-3.971h.34c1.024 0 4.282.361 5.09 4.206Zm-12.975-3.22c.322 0 .888.016 1.498.22a7.707 7.707 0 0 0-.904 2.37c-.009.044-.793 5-.34 6.878.004.011.012.019.015.03a5.401 5.401 0 0 1-.884-.139C1.077 19.08.043 17.77.006 17.046c-.055-1.113.264-3.348.29-3.468.647-3.093 3.077-3.194 3.9-3.194h.22Zm15.453 0c.875.006 3.203.175 3.835 3.194.026.12.346 2.355.29 3.468-.035.723-1.07 2.033-3.794 2.698a5.92 5.92 0 0 1-.555.106c.193-1.493-.318-6.45-.357-6.64-.218-1.041-.591-1.918-1.068-2.648a4.843 4.843 0 0 1 1.364-.178h.285Zm-.204-5.95a2.556 2.556 0 0 1 2.562 2.55 2.557 2.557 0 0 1-2.562 2.55 2.558 2.558 0 0 1-2.564-2.55c0-1.41 1.15-2.55 2.564-2.55Zm-15.33 0a2.556 2.556 0 0 1 2.563 2.55 2.557 2.557 0 0 1-2.563 2.55 2.556 2.556 0 0 1-2.56-2.55 2.555 2.555 0 0 1 2.56-2.55ZM12.205 2a3.177 3.177 0 0 1 3.185 3.169 3.178 3.178 0 0 1-3.186 3.17 3.179 3.179 0 0 1-3.187-3.17A3.178 3.178 0 0 1 12.204 2Z"
			/>
		</Svg>
	);
});

export type GroupWatchIconProps = Props;
