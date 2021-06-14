import React from 'react';
import styled from "styled-components/macro";
import QuestionBody from "./components/question-body";
import {useCustomSelector} from "./hooks/custom-hooks";
import {getQuestionNumber, getQuestions} from "./store/selectors";
import {question} from "./store/reducer";
import Result from "./components/result";


function App() {
    const arrQuestion:Array<question> = useCustomSelector(getQuestions)
    const numberQuestion = useCustomSelector(getQuestionNumber)


    const content = () => {
        return arrQuestion.length + 1 === numberQuestion ?
            <Result arrQuestionsLength={arrQuestion.length}/> :
            <QuestionBody arrQuestion={arrQuestion} numberQuestion={numberQuestion}/>
    }

    return (
        <QuizWrapper>
            <Title>Тестирование</Title>
            <CommonWrapper>
                {content()}
            </CommonWrapper>
        </QuizWrapper>

    );
};


export default App;


const QuizWrapper = styled.main`
  padding: 10px;
  max-width: 800px;
  margin: 50px auto;
`

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 20px;
`
const CommonWrapper = styled.section`
  border: 3px solid white;
  border-radius: 5px;
  padding: 10px 15px;
`
