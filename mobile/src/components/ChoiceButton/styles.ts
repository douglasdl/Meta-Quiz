import styled from 'styled-components/native';
import { THEME } from '../../theme';
import { TouchableOpacity } from 'react-native';

type ChoiceButtonProps = {
    prefix: string;
    text: string;
    onPress: () => void;
    color?: 'blue' | 'yellow' | 'red' | 'green';
}

export const ChoiceButtonContainer = styled(TouchableOpacity)<ChoiceButtonProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    background-color: ${({ color }) => 
        color  === 'blue' 
        ? 
            "linear-gradient(90deg, rgb(18, 92, 255) 0%, rgb(0, 102, 255) 100%)" 
        : 
            (
                color  === 'green' ? 
                "linear-gradient(32deg, rgb(11, 223, 36) 0%, rgb(41, 232, 111) 100%)" 
                : 
                    (
                        color  === 'red' 
                        ? 
                            "linear-gradient(32deg, rgb(230, 29, 29) 0%, rgb(224, 11, 11) 100%)" 
                        : 
                            "linear-gradient(90deg, rgb(255, 247, 9) 0%, rgb(240, 221, 6) 100%)"
                    )
            )
        
    };
    padding: 20px 0;
    width: 100%;
    margin-bottom: 12px;
    border-radius: 8px;
`;

export const ChoicePrefix = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.SM }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
    margin-left: 10px;
    margin-right: 20px;
`;

export const ChoiceText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({ theme }) => theme.FONT_SIZE.SM }px;
    color: ${({ theme }) => theme.COLORS.TEXT };
`;

export const Title = styled.Text<ChoiceButtonProps>`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-align: center;
    color: ${({ color }) => color  === 'blue' ? "white" : "black" };
`;