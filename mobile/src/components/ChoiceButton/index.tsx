import { 
    ChoiceButtonContainer, 
    ChoicePrefix, 
    ChoiceText, 
} from "./styles";

type ChoiceButtonProps = {
    prefix: string;
    text: string;
    onPress: () => void;
    color?: 'blue' | 'yellow' | 'green' | 'red';
}

export function ChoiceButton({ prefix = "A", text, onPress, color = 'blue' }: ChoiceButtonProps) {
    return (
        <ChoiceButtonContainer onPress={onPress} color={color}>
            <ChoicePrefix>
                { prefix }
            </ChoicePrefix>
            <ChoiceText>
                { text }
            </ChoiceText>
        </ChoiceButtonContainer>
    )
}