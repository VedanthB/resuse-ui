import type { FC } from 'react';
import { HiHome } from 'react-icons/hi';
import { Breadcrumb } from '~/lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const BreadcrumbPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Breadcrumb Navigation',
    description:
      'Breadcrumbs help users navigate a website’s hierarchy by providing a clear path to previous pages. ReuseUI offers customizable breadcrumb components, including a minimalist transparent style and variants with solid backgrounds for better visibility.',
    usage: () => `import { Breadcrumb } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Breadcrumb',
      content: 'A simple breadcrumb trail for easy navigation within a website’s structure.',
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
      title: 'Breadcrumb with Background',
      content: 'Add a solid background to the breadcrumb for better contrast and readability.',
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
