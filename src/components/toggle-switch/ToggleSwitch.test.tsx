import { DefaultSwitch, DefaultSwitchThemed, DisabledSwitch, ThreeOptions } from './ToggleSwitch.stories';
import { render, screen } from '@testing-library/react';

import React from 'react';

test('renders toggle switch with minimal props', () => {
  render(<DefaultSwitch {...DefaultSwitch.args} />);
  expect(screen.getByText(/Hello/i)).toBeDefined();
  expect(screen.getByText(/World/i)).toBeDefined();
});

test('renders toggle switch with custom theme', () => {
  const { container } = render(<DefaultSwitchThemed {...DefaultSwitchThemed.args} />);
  expect(container.firstChild).toHaveStyle(`border-color: ${DefaultSwitchThemed.args.theme.borderColor}`);
});

test('renders disabled toggle switch with pointer-events: none', () => {
  const { container } = render(<DisabledSwitch {...DisabledSwitch.args} />);
  expect(container.firstChild).toHaveStyle(`pointer-events: none`);
});

test('renders toggle switch with three options', () => {
  const { container } = render(<ThreeOptions {...ThreeOptions.args} />);
  expect(screen.getByText(/First Option/i)).toBeDefined();
  expect(screen.getByText(/Second Option/i)).toBeDefined();
  expect(screen.getByText(/Third Option/i)).toBeDefined();
});
