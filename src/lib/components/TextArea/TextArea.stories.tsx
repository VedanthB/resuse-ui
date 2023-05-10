import type { Meta, Story } from '@storybook/react/types-6-0';
import type { TextareaProps } from './TextArea';
import { Textarea } from './TextArea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const DefaultTextarea = Template.bind({});
DefaultTextarea.storyName = 'Textarea';
DefaultTextarea.args = {
  children: 'Text',
};
