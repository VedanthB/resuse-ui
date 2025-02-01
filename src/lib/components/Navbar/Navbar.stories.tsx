import type { Meta, Story } from '@storybook/react/types-6-0';

import type { NavbarComponentProps } from '../Navbar';
import { Navbar } from '../Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarComponentProps> = (args) => (
  <div className='w-4/5'>
    <Navbar {...args} />
  </div>
);

export const DefaultNavbar = Template.bind({});
DefaultNavbar.storyName = 'Default';
DefaultNavbar.args = {
  children: (
    <>
      <Navbar.Brand href='#'>
        <img src='#' className='h-6 mr-3 sm:h-9' alt='ReuseUI Logo' />
        <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
          ReuseUI
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href='/navbars' active>
          Home
        </Navbar.Link>
        <Navbar.Link href='/navbars'>About</Navbar.Link>
        <Navbar.Link href='/navbars'>Services</Navbar.Link>
        <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
        <Navbar.Link href='/navbars'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
};
