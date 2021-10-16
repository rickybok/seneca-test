import { ComponentMeta, ComponentStory } from '@storybook/react';

import QuestionPresenter from './QuestionPresenter';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/QuestionPresenter',
  component: QuestionPresenter,
} as ComponentMeta<typeof QuestionPresenter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QuestionPresenter> = (args) => <QuestionPresenter {...args} />;

export const MinimumProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MinimumProps.args = {
  question: 'What are the ideal conditions inside an office?',
  answerOptions: [
    {
      id: 'answer1',
      correctAnswerId: 'option1',
      options: [
        {
          value: 'Good Pay',
          id: 'option1',
        },
        {
          value: 'Bad Pay',
          id: 'option2',
        },
      ],
    },
    {
      id: 'answer2',
      correctAnswerId: 'option2',
      options: [
        {
          value: 'Lot of meetings',
          id: 'option1',
        },
        {
          value: 'Less meetings',
          id: 'option2',
        },
      ],
    },
    {
      id: 'answer3',
      correctAnswerId: 'option2',
      options: [
        {
          value: 'Free coffee',
          id: 'option1',
        },
        {
          value: 'Expensive coffee',
          id: 'option2',
        },
      ],
    },
    {
      id: 'answer4',
      correctAnswerId: 'option1',
      options: [
        {
          value: 'Bear in office',
          id: 'option1',
        },
        {
          value: 'Dog in office',
          id: 'option2',
        },
      ],
    },
  ],
};

export const ThemedQuestionPresenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThemedQuestionPresenter.args = {
  ...MinimumProps.args,
  backgroundColors: ['#6E85B2', '#5C527F', '#3E2C41', '#26012C', '#261C2C'],
  correctString: 'This is a custom correct string',
  incorrectString: 'This is a custom incorrect string',
};

export const MultipleSizedOptions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultipleSizedOptions.args = {
  question: 'Which are the best sports people & teams?',
  answerOptions: [
    {
      id: 'answer1',
      correctAnswerId: 'option1',
      options: [
        {
          value: 'Liverpool',
          id: 'option1',
        },
        {
          value: 'Chelsea',
          id: 'option2',
        },
        {
          value: 'Man Utd',
          id: 'option3',
        },
      ],
    },
    {
      id: 'answer2',
      correctAnswerId: 'option2',
      options: [
        {
          value: 'Serena Williams',
          id: 'option1',
        },
        {
          value: 'Naomi Osaka',
          id: 'option2',
        },
      ],
    },
  ],
};
