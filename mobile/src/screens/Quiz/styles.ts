import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
`;

export const Game = styled.View`
    width: 94%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    padding-bottom: 20px;
`;

export const Question = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.LG }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
    margin-bottom: 20px;
`;

export const ChoiceContainer = styled.View`
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-direction: row;
    width: 100%;
`;