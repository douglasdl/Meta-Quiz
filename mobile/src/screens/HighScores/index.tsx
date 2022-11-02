import { useNavigation, useRoute } from "@react-navigation/native";
import { Audio } from 'expo-av';
import { dictionary, languages } from "../../utils/settings";
import { House } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { Container, EmptyList, Player, PlayerContainer, Title, Score } from "./styles"
import clicktWav from '../../../assets/click.wav';

type RouteParams = {
    language: languages;
}

export function HighScores() {

    const [sound, setSound] = useState<Audio.Sound>();

    const [highscoresList, setHighscoresList] = useState(['']);

    const navigation = useNavigation();
    const route = useRoute();
    const { language } = route.params as RouteParams;

    function handleGoHome() {
        playSound(clicktWav);
        navigation.navigate('home');
    }

    async function playSound(soundFile: any) {
        const { sound } = await Audio.Sound.createAsync(soundFile);
        setSound(sound);
    
        await sound.playAsync();
    }

    useEffect(() => {
        setHighscoresList(['Douglas', 'Karina', 'Carolina', 'Yuna']);
    }, []);

    return (
        <Container>
            <Title>{dictionary.leaderboard[language]}</Title>
            
            <FlatList 
                keyExtractor={(item) => item}
                data={highscoresList}
                renderItem={({ item }) => (
                    <PlayerContainer>
                        <Player>
                            {item}
                        </Player> 
                        <Score>
                            500
                        </Score>
                    </PlayerContainer>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <EmptyList>
                        {dictionary.noplayer[language]}
                    </EmptyList>
                )}
            />

            <Button 
                title={dictionary.home[language]}
                onPress={() => {handleGoHome()}}
                icon={<House size={32} weight="bold" />}
            />
        </Container>
    )
}