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
        return arrQuestion.length + 1 === numberQuestion ? <Result arrQuestionsLength={arrQuestion.length}/> : <QuestionBody arrQuestion={arrQuestion} numberQuestion={numberQuestion}/>
    }

    return (
        <>
            <Title>Тестирование</Title>
            <CommonWrapper>
                {content()}
            </CommonWrapper>
        </>

    );
};


export default App;

const Title = styled.h1`
  text-align: center;
  margin-top: 100px;
  font-size: 4rem;
`
const CommonWrapper = styled.section`
  margin: 50px auto;
  max-width: 800px;
  border: 3px solid white;
  border-radius: 5px;
  padding: 15px 25px;
`
