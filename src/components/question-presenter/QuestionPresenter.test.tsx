import { render, screen } from '@testing-library/react';

import { MinimumProps } from './QuestionPresenter.stories';
import React from 'react';

test('renders question with minimal props', () => {
  render(<MinimumProps {...MinimumProps.args} />);
  expect(screen.getByText(MinimumProps.args.question)).toBeDefined();
});

test('renders question with minimal props', () => {
  render(<MinimumProps {...MinimumProps.args} />);
  expect(screen.getByText(MinimumProps.args.question)).toBeDefined();
});
