import {CORRECT_ANSWER, NEXT_QUESTION, RESET_QUIZ} from "./constants";

export const nextQuestion = () => ({type: NEXT_QUESTION}as const)
export const correctAnswer = () => ({type: CORRECT_ANSWER}as const)
export const resetQuiz = () => ({type: RESET_QUIZ}as const)


