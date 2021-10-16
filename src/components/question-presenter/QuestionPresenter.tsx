import React, { useEffect, useState } from 'react';

import { AnswerOptions } from '../../types';
import { ToggleSwitch } from '../toggle-switch/ToggleSwitch';
import { shuffleArray } from '../../utils/shuffle-array';
import styled from 'styled-components';

const Container = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  min-width: 300px;
`;

const Title = styled.div`
  font-family: Mulish;
  font-size: 40px;
  color: #fff;
  font-weight: 700;
  text-align: center;
`;

const Footer = styled(Title)`
  font-size: 32px;
`;

const DEFAULT_BACKGROUND_COLORS: string[] = ['#FF5200', '#F9B208', '#F98404', '#FC5404', '#FA1E0E'];
const DEFAULT_CORRECT_MESSAGE = 'The answer is correct!';
const DEFAULT_INCORRECT_MESSAGE = 'The answer is incorrect';

interface QuestionPresenterProps {
  question: string;
  answerOptions: AnswerOptions[];
  backgroundColors?: string[];
  correctString?: string;
  incorrectString?: string;
}

/**
 * Component for presenting a question with its possible answers
 *
 * @component QuestionPresenter
 * @param  props
 * @param  props.question - Question to be presented
 * @param  props.answerOptions - An array of AnswersOptions
 * @param  props.backgroundColors - Array of background colors which changes depending on number of questions correct.
 * @param  props.correctString - Message to display when all answers have been answered correctly
 * @param  props.incorrectString - Message to display when not all answers have been answered correctly
 */
const QuestionPresenter: React.FC<QuestionPresenterProps> = ({
  answerOptions,
  question,
  backgroundColors = DEFAULT_BACKGROUND_COLORS,
  correctString = DEFAULT_CORRECT_MESSAGE,
  incorrectString = DEFAULT_INCORRECT_MESSAGE,
}) => {
  if (!question || !answerOptions) {
    throw new Error('No question, and/or options presented!');
  }

  const [shuffledAnswers, setShuffledAnswers] = useState<AnswerOptions[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  useEffect(() => {
    // Shuffles both the answers and the options within them.
    const initAnswerOptions = shuffleArray(
      answerOptions.map((answerOption) => {
        return { ...answerOption, options: shuffleArray(answerOption.options) };
      }),
    );

    // Automatically select first option
    const initAnswers = initAnswerOptions.reduce((selected, answerOption) => {
      return { ...selected, [answerOption.id]: answerOption.options[0].id };
    }, {});

    setShuffledAnswers(initAnswerOptions);
    setSelectedAnswers(initAnswers);
  }, [answerOptions]);

  useEffect(() => {
    setCorrectAnswers(() =>
      answerOptions.reduce((numCorrect, answerOption) => {
        return numCorrect + (selectedAnswers[answerOption.id] === answerOption.correctAnswerId ? 1 : 0);
      }, 0),
    );
  }, [selectedAnswers]);

  const incorrectAnswers: number = answerOptions.length - correctAnswers;
  const allCorrect: boolean = incorrectAnswers === 0;

  return (
    <Container backgroundColor={backgroundColors[Math.max(0, answerOptions.length - incorrectAnswers)]}>
      <Title>{question}</Title>
      {shuffledAnswers.map((answer) => {
        return (
          <ToggleSwitch
            options={answer.options}
            onChange={({ id }) => {
              setSelectedAnswers((prevAnswers) => ({ ...prevAnswers, [answer.id]: id }));
            }}
            key={answer.id}
            enabled={!allCorrect}
          ></ToggleSwitch>
        );
      })}
      <Footer>{allCorrect ? correctString : incorrectString}</Footer>
    </Container>
  );
};

export default QuestionPresenter;
