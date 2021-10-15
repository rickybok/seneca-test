// Possible options per answer
export interface AnswerOptions {
    id: string;
    options: Option[];
    correctAnswerId: string;
}

export interface Option {
    id: string;
    value: string;
}
