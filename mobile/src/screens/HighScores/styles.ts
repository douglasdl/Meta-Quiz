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
    margin-top: 40px;
    margin-bottom: 50px;
`;

export const EmptyList = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.LG }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
`;

export const PlayerContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 300px;
    margin-bottom: 20px;
`;

export const Player = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.LG }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
    margin-bottom: 10px;
`;

export const Score = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.LG }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
    margin-bottom: 10px;
`;