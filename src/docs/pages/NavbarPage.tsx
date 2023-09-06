import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Avatar, Button, Dropdown, Navbar } from '~/lib';
import { Link } from 'react-router-dom';

const NavbarPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Navbar',
    description:
      'Use the navbar component to show navigation menu items and links on the top side of your page based on multiple styles and options built with React and Tailwind CSS',
    usage: () => `import { Navbar } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default navbar',
      code: (
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} to='/navbars'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
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
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Navbar with CTA button',
      code: (
        <Navbar fluid rounded>
          <Navbar.Brand href='https://ReuseUI.com/'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
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
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Navbar with dropdown',
      code: (
        <Navbar fluid rounded>
          <Navbar.Brand href='https://ReuseUI.com/'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
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
                  img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm'>Bonnie Green</span>
                <span className='block truncate text-sm font-medium'>name@ReuseUI.com</span>
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
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default NavbarPage;
