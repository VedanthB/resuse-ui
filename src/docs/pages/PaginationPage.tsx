import { useState, type FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Pagination } from '~/lib';

const PaginationPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageContent: PageContent = {
    title: 'Pagination',
    description:
      'Get started with the pagination component to indicate the number of pages with number, link, and control buttons and allow the user to navigate through these pages',
    usage: () => `import { Pagination } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default pagination',
      code: <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />,
    },
    {
      title: 'Pagination with icons',
      code: (
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          showIcons
          totalPages={100}
        />
      ),
    },
    {
      title: 'Previous and next',
      code: (
        <Pagination
          currentPage={currentPage}
          layout='navigation'
          totalPages={100}
          onPageChange={onPageChange}
        />
      ),
    },
    {
      title: 'Previous and next with icons',
      code: (
        <Pagination
          currentPage={currentPage}
          layout='navigation'
          onPageChange={onPageChange}
          showIcons
          totalPages={100}
        />
      ),
    },
    {
      title: 'Table data navigation',
      code: (
        <div className='flex items-center justify-center text-center'>
          <Pagination
            currentPage={currentPage}
            layout='table'
            onPageChange={onPageChange}
            totalPages={1000}
          />
        </div>
      ),
    },
    {
      title: 'Table data navigation with icons',
      code: (
        <div className='flex items-center justify-center text-center'>
          <Pagination
            currentPage={currentPage}
            layout='table'
            onPageChange={onPageChange}
            showIcons
            totalPages={1000}
          />
        </div>
      ),
    },
    {
      title: "Change 'Previous' and 'Next' text",
      code: (
        <div className='flex items-center justify-center text-center'>
          <Pagination
            currentPage={currentPage}
            layout='pagination'
            onPageChange={onPageChange}
            showIcons
            totalPages={1000}
            previousLabel='Go back'
            nextLabel='Go forward'
          ></Pagination>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default PaginationPage;
