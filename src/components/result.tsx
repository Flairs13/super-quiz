import React, {useLayoutEffect, useMemo} from 'react';
import styled from "styled-components/macro";
import {getCorrectAnswers} from "../store/selectors";
import {useCustomDispatch, useCustomSelector} from "../hooks/custom-hooks";
import {resetQuiz} from "../store/actions";


const Result: React.FC<{ arrQuestionsLength: number }> = ({arrQuestionsLength}) => {
    const numberOfCorrectAnswers = useCustomSelector(getCorrectAnswers)
    const dispatch = useCustomDispatch()

    const getStrokeDashArray = () => {
        const percent: number = (numberOfCorrectAnswers / arrQuestionsLength) * 100
        const remainder = 100 - Number(percent.toFixed(2))
        return `${percent} ${remainder}`
    }

    return (
        <ResultWrapper>
            <CanvasWrapper>
                <CanvasSvg style={{maxWidth: '500px'}} className="canvas">
                    <svg width="100%" height="100%" viewBox="0 0 50 50">
                        <circle cx="50%" cy="50%" r="15.91549430918952" fill="transparent" stroke="#BFC4C4" strokeWidth="5"/>
                        <CorrectAnswerCircle r="15.91549430918952" strokeDashoffset='25' strokeDasharray={getStrokeDashArray()} cx="50%" cy="50%"/>
                        <g>
                            <TextNumber x="50%" y="50%">
                                {numberOfCorrectAnswers}
                            </TextNumber>
                            <TextLabel x="50%" y="50%">
                                Правильных ответов
                            </TextLabel>
                        </g>
                    </svg>
                </CanvasSvg>
                <Label>
                    <ul>
                        <LabelItem>
                            <div style={{width: '15px', height: '15px', backgroundColor: '#4cf54c', borderRadius: '2px'}}/>
                            <LabelItemText>Правильные ответы: {numberOfCorrectAnswers}</LabelItemText>
                        </LabelItem>
                        <LabelItem>
                            <div style={{width: '15px', height: '15px', backgroundColor: '#BFC4C4', borderRadius: '2px'}}/>
                            <LabelItemText>Всего вопросов: {arrQuestionsLength}</LabelItemText>
                        </LabelItem>
                    </ul>
                </Label>
            </CanvasWrapper>
            <Button onClick={() => dispatch(resetQuiz())}>Начать заново</Button>
        </ResultWrapper>
    );
};

export default Result;

const ResultWrapper = styled.div`
  font-size: 2rem;
  text-align: center;
`

const CanvasSvg = styled.div`
  max-width: 500px;
`

const Label = styled.div`
  
`

const CanvasWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CorrectAnswerCircle = styled.circle`
  fill: transparent;
  stroke: #4cf54c;
  stroke-width: 5;
`

const TextNumber = styled.text`
  font-size: 0.5rem;
  fill: white;
  transform: translateX(-0.13rem);
`
const TextLabel = styled.text`
  font-size: 0.12rem;
  fill: white;
  transform: translate(-0.72rem, 0.25rem);
`

const LabelItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`

const LabelItemText = styled.p`
  font-size: 1.6rem;
  margin-left: 5px;
`

const Button = styled.button`
  border: none;
  border-radius: 5px;
  margin: 10px 20px;
  font-size: 1.6rem;
  letter-spacing: 2px;
  padding: 10px;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
  :hover {
    background: #2EE59D;
    box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
    color: white;
    transform: translateY(-7px);
  }
`