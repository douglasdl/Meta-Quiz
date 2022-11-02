import { 
    ButtonContainer, 
    Title 
} from "./styles";

type ButtonProps = {
    title: string;
    onPress: () => void;
    icon?: React.ReactNode;
    color?: 'blue' | 'yellow';
}

export function Button({ title = "Play", onPress, icon, color = 'blue' }: ButtonProps) {
    return (
        <ButtonContainer onPress={onPress} color={color}>
            <Title color={color}>
                { title }
            </Title>
            { icon }
        </ButtonContainer>
    )
}