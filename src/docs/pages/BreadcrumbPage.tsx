import type { FC } from 'react';
import { HiHome } from 'react-icons/hi';
import { Breadcrumb } from '~/lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const BreadcrumbPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Breadcrumb',
    description:
      'The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages. ReuseUI includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.',
    usage: () => `import { Breadcrumb } from 'ReuseUI-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default breadcrumb',
      code: (
        <Breadcrumb aria-label='Default breadcrumb example'>
          <Breadcrumb.Item href='#' icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href='#'>Projects</Breadcrumb.Item>
          <Breadcrumb.Item>ReuseUI React</Breadcrumb.Item>
        </Breadcrumb>
      ),
    },
    {
      title: 'Solid background',
      code: (
        <Breadcrumb
          aria-label='Solid background breadcrumb example'
          className='bg-gray-50 py-3 px-5 dark:bg-gray-900'
        >
          <Breadcrumb.Item href='#' icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href='#'>Projects</Breadcrumb.Item>
          <Breadcrumb.Item>ReuseUI React</Breadcrumb.Item>
        </Breadcrumb>
      ),
    },
  ];
  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default BreadcrumbPage;
