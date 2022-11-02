import styled from 'styled-components/native';
import { THEME } from '../../theme';
import { TouchableOpacity } from 'react-native';

type ButtonProps = {
    title: string;
    onPress: () => void;
    icon?: React.ReactNode;
    color?: 'blue' | 'yellow';
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    background-color: ${({ color }) => color  === 'blue' ? "linear-gradient(90deg, rgb(18, 92, 255) 0%, rgb(0, 102, 255) 100%)" : "linear-gradient(90deg, rgb(255, 247, 9) 0%, rgb(240, 221, 6) 100%)" };
    padding: 16px 0;
    width: 60%;
    margin-bottom: 12px;
    border-radius: 8px;
`;

export const Title = styled.Text<ButtonProps>`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-align: center;
    color: ${({ color }) => color  === 'blue' ? "white" : "black" };
`;