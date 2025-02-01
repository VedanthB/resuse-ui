import type { FC } from 'react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';
import { Accordion } from '../../lib';
import { CodeExample, DemoPage, PageContent } from './DemoPage';

const AccordionPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Accordion Component – Expandable Content Sections',
    description:
      'The Accordion component provides a structured way to organize and display expandable content. Built with Tailwind CSS and designed for accessibility, this component enables users to toggle content visibility efficiently. It is ideal for FAQs, documentation, and settings panels.',

    usage: () => `import { Accordion } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Accordion with Expandable Sections',
      content: '',
      code: (
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>What is ReuseUI?</Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                ReuseUI is a modular UI component library built with React, TypeScript, and Tailwind
                CSS. It offers pre-built, customizable components that enhance development
                efficiency while maintaining accessibility and performance.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                Learn more in our{' '}
                <a
                  href='https://ReuseUI.com/docs/getting-started/introduction/' //TODO: update the link
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  documentation
                </a>{' '}
                and explore how ReuseUI can improve your development workflow.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How does ReuseUI handle theming?</Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                ReuseUI features a <span className='font-bold'>customizable theming system</span>{' '}
                allowing developers to override styles while ensuring design consistency across
                components.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                The library employs a <span className='font-bold'>deep merge strategy</span>,
                providing granular control over styling. Learn more about theming in our{' '}
                <a
                  href='https://ReuseUI.com/figma/'
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  theming guide
                </a>{' '}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How is ReuseUI different from other UI libraries?</Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Unlike UI libraries such as MUI or Chakra UI, ReuseUI is tailored specifically for
                <span className='font-bold'> Tailwind CSS users</span>, prioritizing a{' '}
                <span className='font-bold'>lightweight modular, and composable</span>, approach.
              </p>
              <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
                <li>
                  <span className='font-bold'>Built-in Tailwind utility classes</span> for
                  effortless styling.
                </li>
                <li>
                  <span className='font-bold'>Flexible compound component architecture</span> for
                  enhanced customization.
                </li>
                <li>
                  <span className='font-bold'>Accessibility-focused design</span> including ARIA
                  roles and keyboard navigation support.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Accordion with Always-Visible Sections',
      content: '',
      code: (
        <Accordion alwaysOpen>
          <Accordion.Panel>
            <Accordion.Title>What are compound components in ReuseUI</Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                ReuseUI utilizes the <span className='font-bold'>compound component pattern</span>,
                allowing parent components to manage state while child components consume shared
                context.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                Example: Tabs.Group holds the active tab state, while{' '}
                <code className='bg-gray-200 px-1 rounded'>Tabs.Item</code> dynamically updates
                based on user interaction.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Borderless Accordion for Seamless Layouts',
      content: '',
      code: (
        <Accordion flush>
          <Accordion.Panel>
            <Accordion.Title>How does ReuseUI ensure accessibility?</Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Accessibility is a <span className='font-semibold'> bold</span> principle in
                ReuseUI. Components include proper ARIA attributes, keyboard navigation, and focus
                management to enhance usability.
              </p>

              <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
                <li>
                  <span className='font-bold'>Modals</span> trap focus and close when pressing{' '}
                  <code className='bg-gray-200 px-1 rounded'>Escape</code>
                </li>
                <li>
                  <span className='font-bold'>Tabs</span> support{' '}
                  <code className='bg-gray-200 px-1 rounded mr-2'>Arrow</code>
                  key navigation.
                </li>
                <li>
                  <span className='font-bold'>Accordions</span> use{' '}
                  <code className='bg-gray-200 px-1 rounded mr-2'> aria-expanded</code> attributes
                  for screen readers.
                </li>
              </ul>
              <p className='text-gray-500 dark:text-gray-400'></p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Accordion with Custom Arrow Indicators',
      content: '',
      code: (
        <Accordion arrowIcon={HiOutlineArrowCircleDown}>
          <Accordion.Panel>
            <Accordion.Title>How does ReuseUI ensure accessibility?</Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Accessibility is a <span className='font-semibold'> bold</span> principle in
                ReuseUI. Components include proper ARIA attributes, keyboard navigation, and focus
                management to enhance usability.
              </p>

              <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
                <li>
                  <span className='font-bold'>Modals</span> trap focus and close when pressing{' '}
                  <code className='bg-gray-200 px-1 rounded'>Escape</code>
                </li>
                <li>
                  <span className='font-bold'>Tabs</span> support{' '}
                  <code className='bg-gray-200 px-1 rounded mr-2'>Arrow</code>
                  key navigation.
                </li>
                <li>
                  <span className='font-bold'>Accordions</span> use{' '}
                  <code className='bg-gray-200 px-1 rounded mr-2'> aria-expanded</code> attributes
                  for screen readers.
                </li>
              </ul>
              <p className='text-gray-500 dark:text-gray-400'></p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default AccordionPage;
