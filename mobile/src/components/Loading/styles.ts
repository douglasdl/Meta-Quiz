import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) =>({
    color: theme.COLORS.GRAY_200
}))`
`;