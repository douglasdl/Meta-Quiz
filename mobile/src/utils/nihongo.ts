export type QuestionProps = {
    question: string;
    choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    answer: number;
}

export const questions:QuestionProps[] = [
    {
        question: '猫がいます。',
        choice1 : 'いぬ',
        choice2 : 'ねこ',
        choice3 : 'ねずみ',
        choice4 : 'きつね',
        answer : 2,
    },
    {    
        question: '犬がいます。',
        choice1 : 'いぬ',
        choice2 : 'ねこ',
        choice3 : 'ねずみ',
        choice4 : 'きつね',
        answer : 1,
    },
    {    
        question: '牛がいます。',
        choice1 : 'やぎ',
        choice2 : 'ひつじ',
        choice3 : 'うし',
        choice4 : 'うま',
        answer : 3,
    },
    {    
        question: '羊がいます',
        choice1 : 'ひつじ',
        choice2 : 'やぎ',
        choice3 : 'うし',
        choice4 : 'うま',
        answer : 1,
    },
    {    
        question: '魚がいます',
        choice1 : 'さかな',
        choice2 : 'うま',
        choice3 : 'とり',
        choice4 : 'えび',
        answer : 1,
    }
];