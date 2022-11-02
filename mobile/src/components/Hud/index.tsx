import { useState } from "react";
import { dictionary, languages } from "../../utils/settings";
import { 
    HudContainer, 
    HudItem, 
    ProgressBar, 
    ProgressBarFull, 
    ProgressText, 
    Score, 
    ScoreText,  
} from "./styles";

type HudProps = {
    currentQuestion: number;
    totalQuestions: number;
    score: number;
    percentage?: number;
    lang: languages;
}

export function Hud({ currentQuestion, totalQuestions, score, percentage = 0, lang }: HudProps) {
    percentage = (currentQuestion  / totalQuestions) * 100;

    const [language, setLanguage] = useState(lang);

    return (
        <HudContainer>
            <HudItem>
                <ProgressText>
                    {dictionary.question[language]} { currentQuestion } {dictionary.of[language]} { totalQuestions }
                </ProgressText>
                <ProgressBar>
                    <ProgressBarFull percentage={percentage}>

                    </ProgressBarFull>
                </ProgressBar>
            </HudItem>
            <HudItem>
                <ScoreText>
                    { dictionary.score[language] }
                </ScoreText>
                <Score>
                    { score }
                </Score>
            </HudItem>
        </HudContainer>
    )
}