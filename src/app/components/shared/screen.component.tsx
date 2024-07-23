import {FC} from 'react';
import {ScrollViewProps} from 'react-native';
import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
	flex: 1;
`;

const Container = styled.ScrollView`
	flex: 1;
	background-color: ${({theme}) => theme.colors.background.m};
`;

interface Props extends ScrollViewProps {}

export const Screen: FC<Props> = (props) => {
	return (
		<SafeArea>
			<Container {...props} />
		</SafeArea>
	);
};

export type ScreenProps = Props;
