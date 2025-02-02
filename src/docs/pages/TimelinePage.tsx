import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Button, Timeline } from '~/lib';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

const TimelinePage: FC = () => {
  const pageContent: PageContent = {
    title: 'Timeline',
    description:
      'Use the timeline component from ReuseUI React to display a list of items and events in a chronological order with multiple styles, colors, and layouts.',
    usage: () => `import { Timeline } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Timeline',
      content: 'A simple vertical timeline with key milestones.',
      code: (
        <Timeline>
          {defaultTimelineItems.map(({ time, title, body }, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>{time}</Timeline.Time>
                <Timeline.Title>{title}</Timeline.Title>
                <Timeline.Body>{body}</Timeline.Body>
                {index === 0 && (
                  <Button color='gray'>
                    Learn More
                    <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                  </Button>
                )}
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      ),
    },
    {
      title: 'Vertical Timeline with Icons',
      content: 'A vertical timeline with icons to enhance visual clarity.',
      code: (
        <Timeline>
          {defaultTimelineItems.map(({ time, title, body }, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time>{time}</Timeline.Time>
                <Timeline.Title>{title}</Timeline.Title>
                <Timeline.Body>{body}</Timeline.Body>
                {index === 0 && (
                  <Button color='gray'>
                    Learn More
                    <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                  </Button>
                )}
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      ),
    },
    {
      title: 'Stepper Timeline',
      content: 'A horizontal timeline, ideal for step-by-step processes.',
      code: (
        <Timeline horizontal>
          {stepperTimelineItems.map(({ version, time, body }, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Title>{version}</Timeline.Title>
                <Timeline.Time>{time}</Timeline.Time>
                <Timeline.Body>{body}</Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

// ✅ Timeline Data (Refactored for Clean Code)
const defaultTimelineItems = [
  {
    time: 'February 2022',
    title: 'Application UI code in Tailwind CSS',
    body: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
  {
    time: 'March 2022',
    title: 'Marketing UI design in Figma',
    body: 'All pages and components are first designed in Figma to maintain parity between design and code.',
  },
  {
    time: 'April 2022',
    title: 'E-Commerce UI code in Tailwind CSS',
    body: 'Start using dozens of web components and interactive elements built on top of Tailwind CSS.',
  },
];

const stepperTimelineItems = [
  {
    version: 'reuseUI Library v1.0.0',
    time: 'Released on December 2, 2021',
    body: 'Get started with dozens of web components and interactive elements.',
  },
  {
    version: 'reuseUI Library v1.2.0',
    time: 'Released on December 23, 2021',
    body: 'More features and improvements for interactive elements.',
  },
  {
    version: 'reuseUI Library v1.3.0',
    time: 'Released on January 5, 2022',
    body: 'Refined UI elements for enhanced usability.',
  },
];

export default TimelinePage;
