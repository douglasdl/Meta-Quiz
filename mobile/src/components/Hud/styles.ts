import styled from 'styled-components/native';
import { THEME } from '../../theme';
import { TouchableOpacity } from 'react-native';

type HudProps = {
    currentQuestion: number;
    totalQuestions: number;
    score: number;
    percentage?: number;
}

export const HudContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const HudItem = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70px;
    
    padding-left: 10px;
    padding-right: 10px;
`;

export const ProgressText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.SM }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
    text-align: center;

`;

export const ProgressBar = styled.View`
    width: 140px;
    height: 20px;
    border: 2px solid rgb(11, 223, 36);
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 50px;
    overflow: hidden;
`;

export const ProgressBarFull = styled.View<HudProps>`
    height: 100%;
    background-color: rgb(11, 223, 36);
    width: ${({ percentage }) => percentage}%;
`;

export const ScoreText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.SM }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
`;

export const Score = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.HG }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
    text-align: right;
    width: 100%;
`;