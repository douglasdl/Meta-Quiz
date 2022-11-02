import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from 'expo-av';
import { Container, Title } from "./styles";
import { QuizCard, QuizCardProps } from '../../components/QuizCard';
import { Crown } from "phosphor-react-native";
import { Button } from "../../components/Button";

import { dictionary, languages } from '../../utils/settings';

import clicktWav from '../../../assets/click.wav';
import backgroundWav from '../../../assets/tech-house-vibes.mp3';

type Props = {
    language: languages;
}

export function Home() {

    const [sound, setSound] = useState<Audio.Sound>();

    const [language, setLanguage] = useState(languages.PORTUGUESE);

    const navigation = useNavigation();

    function handlePlay({ language }: Props) {
        playSound(clicktWav);
        navigation.navigate('quiz', { language });
    }

    function handleHightScores({ language }: Props) {
        playSound(clicktWav);
        navigation.navigate('score', { language });
    }

    function handleChangeLanguage(newLanguage: languages) {
        playSound(clicktWav);
        setLanguage(newLanguage);
    }

    async function playSound(soundFile: any) {
        const { sound } = await Audio.Sound.createAsync(soundFile);
        setSound(sound);
    
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync();
            }
          : undefined;
    }, [sound]);

    useEffect(() => {
        playSound(backgroundWav);
    }, []);

    return (
        <Container>
            <Title>{dictionary.title[language]}</Title>
            <Button 
                title={dictionary.play[language]}
                onPress={() => {handlePlay({ language })}}
                color="blue"
            />
            <Button 
                title={dictionary.portuguese[language]}
                onPress={() => {handleChangeLanguage(languages.PORTUGUESE)}}
                color="blue"
            />
            <Button 
                title={dictionary.english[language]}
                onPress={() => {handleChangeLanguage(languages.ENGLISH)}}
                color="blue"
            />
            <Button 
                title={dictionary.japanese[language]}
                onPress={() => {handleChangeLanguage(languages.JAPANESE)}}
                color="blue"
            />
            <Button 
                title={dictionary.highscores[language]}
                onPress={() => {handleHightScores({ language })}}
                icon={<Crown size={32} weight="bold" />}
                color="yellow"
            />
        </Container>
    )
}