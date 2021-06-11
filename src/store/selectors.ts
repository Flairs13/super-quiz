import {AppStateType} from "./index";

export const getQuestions = (state: AppStateType) => state.questions
export const getQuestionNumber = (state: AppStateType) => state.numberQuestion
export const getCorrectAnswers = (state:AppStateType) => state.countCorrectAnswers