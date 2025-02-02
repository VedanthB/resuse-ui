import type { FC } from 'react';
import { Button, Card, Dropdown } from '../../lib';
import { CodeExample, DemoPage, PageContent } from './DemoPage';

const CardPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Cards',
    description:
      'Cards are a versatile UI component for presenting structured information in a visually appealing way. Use them for blog posts, application dashboards, product showcases, user profiles, and more. Designed with accessibility and responsiveness in mind, these cards fit seamlessly into any ReuseUI-powered interface.',
    usage: () => `import { Card } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Card',
      content: 'A simple, clean card for presenting information in a structured format.',
      code: (
        <Card href='#'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            The Future of UI Components
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Discover how modular and reusable UI components are revolutionizing front-end
            development.
          </p>
        </Card>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Card with Action Button',
      content: 'Add interactive elements to your cards with buttons to encourage user engagement.',
      code: (
        <Card>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            ReuseUI in Action
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Learn how ReuseUI makes it easy to create scalable, high-performance interfaces.
          </p>
          <Button>
            Learn More
            <svg
              className='ml-2 -mr-1 h-4 w-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Button>
        </Card>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Card with Image',
      content: 'Enhance your cards with an image to provide visual context to the content.',
      code: (
        <div className='max-w-sm'>
          <Card imgSrc='https://res.cloudinary.com/supertramp69420/image/upload/v1626209468/test/lpsgs9q6wjklcdtozrey.jpg'>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Designing with ReuseUI
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Explore how ReuseUI helps create visually stunning and accessible interfaces
              effortlessly.
            </p>
          </Card>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'User Profile Card',
      content: 'Display user information with avatars, social actions, and quick options.',
      code: (
        <div className='max-w-sm'>
          <Card>
            <div className='flex justify-end px-4 pt-4'>
              <Dropdown inline label='Options'>
                <Dropdown.Item>
                  <a href='#' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'>
                    Edit Profile
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href='#' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'>
                    View Analytics
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href='#' className='block py-2 px-4 text-sm text-red-600 hover:bg-gray-100'>
                    Delete Account
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className='flex flex-col items-center pb-10'>
              <img
                className='mb-3 h-24 w-24 rounded-full shadow-lg'
                src='https://res.cloudinary.com/supertramp69420/image/upload/v1738448872/GTA_wnrn1i.png'
                alt='User avatar'
              />
              <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                Vedanth Bora
              </h5>
              <span className='text-sm text-gray-500 dark:text-gray-400'>UI/UX Designer</span>
              <div className='mt-4 flex space-x-3'>
                <Button>Connect</Button>
                <Button outline>Message</Button>
              </div>
            </div>
          </Card>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'E-Commerce Product Card',
      content: 'A product showcase card with an image, price, rating, and call-to-action button.',
      code: (
        <div className='max-w-sm'>
          <Card
            imgAlt='Smartwatch Product Image'
            imgSrc='https://res.cloudinary.com/supertramp69420/image/upload/v1626209468/test/lpsgs9q6wjklcdtozrey.jpg'
          >
            <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              Smartwatch Pro 2024
            </h5>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              A sleek and powerful smartwatch for fitness enthusiasts and professionals.
            </p>
            <div className='mt-2 flex items-center justify-between'>
              <span className='text-3xl font-bold text-gray-900 dark:text-white'>$349</span>
              <Button>Add to Cart</Button>
            </div>
          </Card>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default CardPage;
