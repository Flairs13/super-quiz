import React from 'react';
import styled from "styled-components/macro";
import AnswersList from "./answers-list";
import { question } from '../store/reducer';


type questionBody = {
    arrQuestion: Array<question>
    numberQuestion: number
}
const QuestionBody:React.FC<questionBody> = ({numberQuestion,arrQuestion}) => {
    const currQuestion = arrQuestion[numberQuestion - 1]

    return (
        <QuestionWrapper>
            <QuestionHeader>
                <QuestionTitle>{currQuestion.question}</QuestionTitle>
                <QuestionCounter>{numberQuestion} из {arrQuestion.length}</QuestionCounter>
            </QuestionHeader>
            <AnswersList  {...currQuestion}/>
        </QuestionWrapper>
    );
};

export default QuestionBody;

const QuestionWrapper = styled.section`
  
`
const QuestionHeader = styled.header`
    display: flex;
    justify-content: space-between;
`

const QuestionTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
`
const QuestionCounter = styled.small`
  display: flex;
`