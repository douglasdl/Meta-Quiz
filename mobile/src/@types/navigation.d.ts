import { languages } from "../utils/settings";

export interface QuizParams {
    language: languages;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined;
            quiz: QuizParams;
            score: QuizParams;
            end: QuizParams;
        }
    }
}