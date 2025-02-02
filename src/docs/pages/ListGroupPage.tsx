import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { ListGroup } from '~/lib';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';

const ListGroupPage: FC = () => {
  const pageContent: PageContent = {
    title: 'List Group',
    description:
      'The List Group component provides an easy way to display a collection of items, such as menu options, navigation links, or categorized lists. It supports icons, links, buttons, and active states for enhanced usability.',
    usage: () => `import { ListGroup } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default List',
      content:
        'A simple list with multiple items. Useful for displaying categorized data or grouped options.',
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
      title: 'List Group with Links',
      content:
        'Each list item acts as a navigation link, allowing users to click and navigate to different pages.',
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
      title: 'List Group with Buttons',
      content:
        'Each list item behaves as a button with click event handling. Ideal for interactive lists in settings or dashboards.',
      code: (
        <div className='w-48'>
          <ListGroup>
            <ListGroup.Item active onClick={() => alert('Profile clicked!')}>
              Profile
            </ListGroup.Item>
            <ListGroup.Item onClick={() => alert('Settings clicked!')}>Settings</ListGroup.Item>
            <ListGroup.Item onClick={() => alert('Messages clicked!')}>Messages</ListGroup.Item>
            <ListGroup.Item onClick={() => alert('Download clicked!')}>Download</ListGroup.Item>
          </ListGroup>
        </div>
      ),
    },
    {
      title: 'List Group with Icons',
      content:
        'Enhance visual clarity by adding icons to each list item. Ideal for menus and navigation lists.',
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
