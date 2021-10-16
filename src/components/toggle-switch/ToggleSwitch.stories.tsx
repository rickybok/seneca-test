import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ToggleSwitch',
  component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch {...args} />;

export const DefaultSwitch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultSwitch.args = {
  options: [
    {
      value: 'Hello',
      id: 'option1',
    },
    {
      value: 'World',
      id: 'option2',
    },
  ],
};

export const DefaultSwitchThemed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultSwitchThemed.args = {
  options: [
    {
      value: 'Hello',
      id: 'option1',
    },
    {
      value: 'World',
      id: 'option2',
    },
  ],
  theme: {
    textColor: '#FF0000',
    borderColor: '#FF0000',
    highlightTextColor: '#FFFFFF',
    highlightBackgroundColor: '#FF0000',
  },
};

export const DisabledSwitch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisabledSwitch.args = {
  options: [
    {
      value: 'Hello',
      id: 'option1',
    },
    {
      value: 'World',
      id: 'option2',
    },
  ],
  enabled: false,
};

export const ThreeOptions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThreeOptions.args = {
  options: [
    {
      value: 'First Option',
      id: 'option1',
    },
    {
      value: 'Second Option',
      id: 'option2',
    },
    {
      value: 'Third Option',
      id: 'option3',
    },
  ],
};
