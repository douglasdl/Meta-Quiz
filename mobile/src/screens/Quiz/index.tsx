import { useEffect, useState } from "react";
import { Audio } from 'expo-av';
import { Hud } from "../../components/Hud";
import { Adds } from "../../components/Adds";
import { ChoiceButton } from "../../components/ChoiceButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { 
    Container, 
    Game, 
    Question, 
} from "./styles"

import wrongWav from '../../../assets/wrong.wav';
import correctWav from '../../../assets/correct.wav';
import { QuestionProps, questions } from '../../utils/nihongo';
import { languages } from "../../utils/settings";

type ColorProps = 'blue' | 'yellow' | 'green' | 'red';

type RouteParams = {
    language: languages;
}

export function Quiz() {
    const [sound, setSound] = useState<Audio.Sound>();

    const SCORE_POINTS = 100
    const MAX_QUESTIONS = 5
    
    const [questionCounter, setQuestionCounter] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(MAX_QUESTIONS);
    const [score, setScore] = useState(0);

    const [question, setQuestion] = useState<QuestionProps>(questions[0]);
    const [choices, setChoices] = useState(['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4']);
    const [choicesColors, setChoicesColors] = useState<ColorProps[]>(['blue', 'blue', 'blue', 'blue', 'blue']);
    const [availableQuestions, setAvailableQuestions] = useState(questions);

    const [acceptingAnswers, setAcceptingAnswers] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();
    const { language } = route.params as RouteParams;

    function startGame() {
        setQuestionCounter(0);
        setScore(0);
        setAvailableQuestions(questions);
        setTotalQuestions(MAX_QUESTIONS);
        setChoicesColors(['blue', 'blue', 'blue', 'blue', 'blue']);
        getNewQuestion();
    }

    function getNewQuestion() {
        if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            //localStorage.setItem('mostRecentScore', score.toString())
            return navigation.navigate('end', { language });
        }
    
        setQuestionCounter(questionCounter + 1);
        
        const questionIndex = Math.floor(Math.random() * availableQuestions.length)
        setQuestion(availableQuestions[questionIndex]);
    
        // availableQuestions.splice(questionIndex, 1)
        let remainingQuestions = availableQuestions.filter(item => item !== availableQuestions[questionIndex]);
        console.log(availableQuestions.length);
        setAvailableQuestions(remainingQuestions);

        setAcceptingAnswers(true);
    }
    
    function incrementScore(num: number) {
        setScore(score + num);
    }

    function handleAnswer(answer: number) {
        if(!acceptingAnswers) return;

        setAcceptingAnswers(false);

        const colorToApply = question.answer === answer ? 'green' : 'red';

        if(colorToApply === 'green') {
            incrementScore(SCORE_POINTS);
            playSound(correctWav);
        } else {
            playSound(wrongWav);
        }
        const responseColors:ColorProps[] = ['blue', 'blue', 'blue', 'blue', 'blue'];
        responseColors[answer] = colorToApply;
        setChoicesColors(responseColors);


        setTimeout(() => {
            setChoicesColors(['blue', 'blue', 'blue', 'blue', 'blue']);
            getNewQuestion()
        }, 1000)
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
        startGame();
    }, []);

    return (
        <Container>
            <Game>
                <Hud 
                    currentQuestion={questionCounter}
                    totalQuestions={totalQuestions}
                    score={score}
                    lang={language}
                />
                <Question>
                    { question.question }
                </Question>
                
                <ChoiceButton 
                    key={"A"}
                    prefix="A"
                    text={ question.choice1 }
                    onPress={() => {handleAnswer(1)}}
                    color={choicesColors[1]}
                />

                <ChoiceButton 
                    key={"B"}
                    prefix="B"
                    text={ question.choice2 }
                    onPress={() => {handleAnswer(2)}}
                    color={choicesColors[2]}
                />
                
                <ChoiceButton 
                    key={"C"}
                    prefix="C"
                    text={ question.choice3 }
                    onPress={() => {handleAnswer(3)}}
                    color={choicesColors[3]}
                />

                <ChoiceButton 
                    key={"D"}
                    prefix="D"
                    text={ question.choice4 }
                    onPress={() => {handleAnswer(4)}}
                    color={choicesColors[4]}
                />
                
                <Adds />
            </Game>
        </Container>
    )
}