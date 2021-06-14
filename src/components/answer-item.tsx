import React, {CSSProperties, useEffect, useState} from 'react';
import styled from "styled-components/macro";
import {isCorrectAnswer} from "../common-func/helper-func";
import {correctAnswer, nextQuestion} from "../store/actions";
import {useCustomDispatch} from "../hooks/custom-hooks";
import {animated, SpringValue} from 'react-spring'

type answerItem = {
    correctAnswerIndex: number
    value: string
    index: number
    id: number
    counterClick: { current: number }
    updateAnimation: (flag: any) => void
    styles: { opacity: SpringValue<number> }
}
const AnswerItem: React.FC<answerItem> = React.memo(({correctAnswerIndex, value, index, counterClick, id, updateAnimation, styles}) => {
    const dispatch = useCustomDispatch()

    const [answer, setAnswer] = useState<number | boolean>(0)

    const clickItem = (index: number) => {
        counterClick.current++
        if (counterClick.current > 1) return


        if (isCorrectAnswer(index, correctAnswerIndex)) {
            setAnswer(true)
            dispatch(correctAnswer())
        } else {
            setAnswer(false)
        }
        updateAnimation((prev: any) => !prev)
        setTimeout(() => dispatch(nextQuestion()), 1500)
    }

    const getBackground = (answerNumber: boolean | number) => {
        switch (answerNumber) {
            case false: {
                return {backgroundColor: 'rgba(240,87,108,.7)'};
            }
            case true: {
                return {backgroundColor: 'rgba(161,240,69,.7)'};
            }
            case 0: {
                return {backgroundColor: undefined}
            }
        }
    }

    useEffect(() => {
        setAnswer(0)
        counterClick.current = 0
    }, [id])

    return (
        <Item style={styles} onClick={() => clickItem(index)}><ItemText style={getBackground(answer)}>{value}</ItemText></Item>
    );
});

export default AnswerItem;

const Item = styled(animated.li)`
  cursor: pointer;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
     @media (max-width: 800px){
      background: none;
    }
  }
 
`

const ItemText = styled.p`
  padding: 10px;
`