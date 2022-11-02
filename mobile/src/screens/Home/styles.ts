import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.HG }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
    margin-bottom: 50px;
`;