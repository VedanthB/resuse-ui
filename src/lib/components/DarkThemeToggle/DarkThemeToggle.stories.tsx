import type { Meta, Story } from '@storybook/react/types-6-0';
import { ReuseUI } from '../ReuseUI';
import { DarkThemeToggle } from './DarkThemeToggle';

export default {
  title: 'Components/DarkThemeToggle',
  component: DarkThemeToggle,
} as Meta;

const Template: Story = (args) => (
  <ReuseUI>
    <DarkThemeToggle {...args} />
  </ReuseUI>
);

export const DefaultDarkThemeToggle = Template.bind({});
DefaultDarkThemeToggle.storyName = 'Default';
DefaultDarkThemeToggle.args = {};
