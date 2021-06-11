import {CORRECT_ANSWER, NEXT_QUESTION, RESET_QUIZ} from "./constants";
import * as actions from './actions'

export type question = {
    id: number
    question: string
    correctAnswerIndex: number
    answers: Array<string>
}


const initialState = {
    numberQuestion: 1,
    questions: [
        {
            id: 1,
            question: 'Кем вы видите себя в будущем',
            correctAnswerIndex: 1,
            answers: ['космонавтом','пожарным','полицейским','компуктерным мастером']
        },
        {
            id: 2,
            question: 'Что ты кушал',
            correctAnswerIndex: 1,
            answers: ['рис','гречка','булгур',]
        },
        {
            id: 3,
            question: 'Когда еще будешь кушать?',
            correctAnswerIndex: 0,
            answers: ['завтра','сегодня']
        }
    ] as Array<question>,
    countCorrectAnswers: 0
}
export type InitialStateType = typeof initialState

export default (state = initialState,action: ActionType):InitialStateType => {
        switch (action.type) {
            case NEXT_QUESTION: {
                return {
                    ...state, numberQuestion: state.numberQuestion + 1
                }
            }

            case CORRECT_ANSWER: {
                return {
                    ...state, countCorrectAnswers: state.countCorrectAnswers + 1
                }
            }

            case RESET_QUIZ: {
                return {
                    ...state, numberQuestion: 1, countCorrectAnswers: 0
                }
            }

            default: return  {...state}
        }
}

type ActionType = ReturnType<InferValueType<typeof actions>>
type InferValueType<T> = T extends {[key: string]: infer U} ? U : never