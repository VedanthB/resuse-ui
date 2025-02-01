import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Avatar, Button, Dropdown, Navbar } from '~/lib';
import { Link } from 'react-router-dom';

const NavbarPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Navbar',
    description:
      'The Navbar component allows you to display a navigation bar at the top of your page with various styles and interactive elements. It supports branding, navigation links, dropdown menus, and buttons for enhanced user interaction.',
    usage: () => `import { Navbar } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Navbar',
      content:
        'A simple navigation bar with a brand logo and menu links. This example demonstrates the default appearance with a collapsible menu.',
      code: (
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} to='/navbars'>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738450370/b2229a89-3f15-489d-a4b6-acb6e43c586e_removalai_preview_ghtgic.png'
              className='mr-3 h-6 sm:h-9'
              alt='ReuseUI Logo'
            />
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              ReuseUI
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href='/navbars' active>
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} to={'/navbars'}>
              About
            </Navbar.Link>
            <Navbar.Link href='/navbars'>Services</Navbar.Link>
            <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
            <Navbar.Link href='/navbars'>Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      ),
    },
    {
      title: 'Navbar with CTA Button',
      content:
        'A navbar with a call-to-action (CTA) button, commonly used to encourage user engagement, such as signing up or getting started.',
      code: (
        <Navbar fluid rounded>
          <Navbar.Brand href='https://ReuseUI.com/'>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738450370/b2229a89-3f15-489d-a4b6-acb6e43c586e_removalai_preview_ghtgic.png'
              className='mr-3 h-6 sm:h-9'
              alt='ReuseUI Logo'
            />
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              ReuseUI
            </span>
          </Navbar.Brand>
          <div className='flex md:order-2'>
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href='/navbars' active>
              Home
            </Navbar.Link>
            <Navbar.Link href='/navbars'>About</Navbar.Link>
            <Navbar.Link href='/navbars'>Services</Navbar.Link>
            <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
            <Navbar.Link href='/navbars'>Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      ),
    },
    {
      title: 'Navbar with User Dropdown',
      content:
        'This example demonstrates a navbar with a user avatar dropdown menu, ideal for authenticated user interactions like profile management and logout.',
      code: (
        <Navbar fluid rounded>
          <Navbar.Brand href='https://ReuseUI.com/'>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738450370/b2229a89-3f15-489d-a4b6-acb6e43c586e_removalai_preview_ghtgic.png'
              className='mr-3 h-6 sm:h-9'
              alt='ReuseUI Logo'
            />
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              ReuseUI
            </span>
          </Navbar.Brand>
          <div className='flex md:order-2'>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt='User settings'
                  img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm'>Vedanth Bora</span>
                <span className='block truncate text-sm font-medium'>name@gmail.com</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href='/navbars' active>
              Home
            </Navbar.Link>
            <Navbar.Link href='/navbars'>About</Navbar.Link>
            <Navbar.Link href='/navbars'>Services</Navbar.Link>
            <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
            <Navbar.Link href='/navbars'>Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default NavbarPage;
