import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { ListGroup } from '~/lib';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';

const ListGroupPage: FC = () => {
  const pageContent: PageContent = {
    title: 'ListGroup',
    description:
      'Get started with the list group component to show a list of elements and menu items inside of an unordered list item built with React and Tailwind CSS',
    usage: () => `import { ListGroup } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default list',
      code: (
        <div className='w-48'>
          <ListGroup>
            <ListGroup.Item>Profile</ListGroup.Item>
            <ListGroup.Item>Settings</ListGroup.Item>
            <ListGroup.Item>Messages</ListGroup.Item>
            <ListGroup.Item>Download</ListGroup.Item>
          </ListGroup>
        </div>
      ),
    },
    {
      title: 'List group with links',
      code: (
        <div className='w-48'>
          <ListGroup>
            <ListGroup.Item active href='/list-group'>
              Profile
            </ListGroup.Item>
            <ListGroup.Item href='/list-group'>Settings</ListGroup.Item>
            <ListGroup.Item href='/list-group'>Messages</ListGroup.Item>
            <ListGroup.Item href='/list-group'>Download</ListGroup.Item>
          </ListGroup>
        </div>
      ),
    },
    {
      title: 'List group with buttons',
      code: (
        <div className='w-48'>
          <ListGroup>
            <ListGroup.Item active onClick={() => alert('Profile clicked!')}>
              Profile
            </ListGroup.Item>
            <ListGroup.Item>Settings</ListGroup.Item>
            <ListGroup.Item>Messages</ListGroup.Item>
            <ListGroup.Item>Download</ListGroup.Item>
          </ListGroup>
        </div>
      ),
      codeStringifierOptions: {
        functionValue: (fn) => (fn.name === 'onClick' ? fn : fn.name),
      },
    },
    {
      title: 'List group with icons',
      code: (
        <div className='w-48'>
          <ListGroup>
            <ListGroup.Item active icon={HiUserCircle}>
              Profile
            </ListGroup.Item>
            <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
            <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
            <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
          </ListGroup>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default ListGroupPage;
