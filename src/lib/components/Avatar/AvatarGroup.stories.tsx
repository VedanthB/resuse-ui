import type { Meta, Story } from '@storybook/react/types-6-0';
import { Avatar } from './Avatar';
import type { AvatarGroupProps } from './AvatarGroup';

export default {
  title: 'Components/Avatar',
  component: Avatar.Group,
} as Meta;

const Template: Story<AvatarGroupProps> = (args) => (
  <Avatar.Group {...args}>
    <Avatar
      img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
      rounded
      stacked
    />
    <Avatar
      img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
      rounded
      stacked
    />
    <Avatar
      img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
      rounded
      stacked
    />
    <Avatar
      img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
      rounded
      stacked
    />
    <Avatar.Counter total={99} href='#' />
  </Avatar.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'Grouped';
DefaultAvatarGroup.args = {};
