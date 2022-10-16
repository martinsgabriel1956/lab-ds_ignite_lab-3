import { Button } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {};
