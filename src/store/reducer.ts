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
            question: 'В какой из этих стран один из официальных языков - французский?',
            correctAnswerIndex: 0,
            answers: ['Республика Гаити','Кения','Эквадор','Венесуэла']
        },
        {
            id: 2,
            question: 'В каком году произошла Куликовская битва?',
            correctAnswerIndex: 2,
            answers: ['1569','1616', '1380','1773']
        },
        {
            id: 3,
            question: 'Какая картина Малевича находится в Русском музее?',
            correctAnswerIndex: 1,
            answers: ['Белый квадрат','Красный квадрат', 'Черный квадрат' , 'Точильщик']
        },
        {
            id: 4,
            question: 'Шкала Сковилла - это шкала оценки...?',
            correctAnswerIndex: 2,
            answers: ['Качества атмосферного воздуха','Привлекательности женщин', 'Остроты перца' , 'Уровня моря']
        },
        {
            id: 5,
            question: 'Что проводит боксер, наносящий удар противнику снизу?',
            correctAnswerIndex: 2,
            answers: ['Свинг','Хук', 'Апперкот' ,'Джэб']
        },

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