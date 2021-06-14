import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components/macro";
import {useTransition, animated, config, useSpring,Trail, useTrail} from 'react-spring'
import {question} from "../store/reducer";
import AnswerItem from './answer-item';

const AnswersList: React.FC<question> = ({correctAnswerIndex, answers,id}) => {
    const counterClick = useRef(0)
    const [isAnimation,updateAnimation] = useState(false)

    const trail = useTrail(answers.length, {
        opacity: isAnimation ? 1 : 0,
        delay: 250,
        config: config.slow
    })


    useEffect(() => {
        updateAnimation(prevState => !prevState)
    },[answers])

    return (
        <AnswersWrapper>
            {trail.map((styles,index) => <AnswerItem value={answers[index]}
                                                        id={id}
                                                        index={index}
                                                        correctAnswerIndex={correctAnswerIndex}
                                                        key={index}
                                                        counterClick={counterClick}
                                                        updateAnimation={updateAnimation}
                                                        styles={styles}
            />)}
        </AnswersWrapper>
    );
};

export default AnswersList;

const AnswersWrapper = styled.ul`
  font-size: 1.3rem;
  margin-top: 50px;
`
