import {ComponentProps} from 'react';
import styled, {css} from 'styled-components/native';

interface Props {
	width?: number | string;
	height?: number | string;
	row?: boolean;
	center?: boolean;
	flex?: number;
	column?: boolean;
	gap?: number;
	padding?: number | string;
}

export const Flex = styled.View<Props>`
	display: flex;

	${({row}) =>
		row &&
		css`
			flex-direction: row;
		`}

	${({column}) =>
		column &&
		css`
			flex-direction: column;
		`}

    ${({center}) =>
		center &&
		css`
			align-items: center;
			justify-content: center;
		`}

    ${({width, height, flex, gap, padding}) => ({
		width,
		height,
		flex,
		gap,
		padding,
	})}
`;

export type FlexProps = ComponentProps<typeof Flex> & Props;
