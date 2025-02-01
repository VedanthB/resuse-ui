import { useState, type FC, useRef } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Button, Tabs, TabsRef } from '~/lib';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

const TabsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);

  const pageContent: PageContent = {
    title: 'Tabs',
    description:
      'The Tabs component allows users to switch between different sections using multiple styles, icons, and layouts.',
    usage: () => `import { Tabs } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Tabs',
      content: 'A simple tabs layout with basic navigation.',
      code: (
        <Tabs.Group aria-label='Default tabs' style='default'>
          {['Profile', 'Dashboard', 'Settings', 'Contacts'].map((tab, index) => (
            <Tabs.Item key={index} title={tab} active={index === 0}>
              {tab} content
            </Tabs.Item>
          ))}
          <Tabs.Item disabled title='Disabled'>
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      ),
    },
    {
      title: 'Tabs with Underline',
      content: 'Tabs styled with an underline indicator.',
      code: (
        <Tabs.Group aria-label='Tabs with underline' style='underline'>
          {['Profile', 'Dashboard', 'Settings', 'Contacts'].map((tab, index) => (
            <Tabs.Item key={index} title={tab} active={index === 1}>
              {tab} content
            </Tabs.Item>
          ))}
          <Tabs.Item disabled title='Disabled'>
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      ),
    },
    {
      title: 'Tabs with Icons',
      content: 'Tabs with icons for better visual distinction.',
      code: (
        <Tabs.Group aria-label='Tabs with icons' style='underline'>
          {[
            { title: 'Profile', icon: HiUserCircle },
            { title: 'Dashboard', icon: MdDashboard },
            { title: 'Settings', icon: HiAdjustments },
            { title: 'Contacts', icon: HiClipboardList },
          ].map((tab, index) => (
            <Tabs.Item key={index} title={tab.title} icon={tab.icon} active={index === 1}>
              {tab.title} content
            </Tabs.Item>
          ))}
          <Tabs.Item disabled title='Disabled'>
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      ),
    },
    {
      title: 'Pills Tabs',
      content: 'Tabs styled as pill buttons.',
      code: (
        <Tabs.Group aria-label='Pills' style='pills'>
          {Array.from({ length: 4 }, (_, index) => (
            <Tabs.Item key={index} title={`Tab ${index + 1}`} active={index === 0}>
              Content {index + 1}
            </Tabs.Item>
          ))}
          <Tabs.Item disabled title='Tab 5'>
            Content 5
          </Tabs.Item>
        </Tabs.Group>
      ),
    },
    {
      title: 'Full Width Tabs',
      content: 'Tabs that stretch across the entire width of their container.',
      code: (
        <Tabs.Group aria-label='Full width tabs' style='fullWidth'>
          {['Profile', 'Dashboard', 'Settings', 'Invoice'].map((tab, index) => (
            <Tabs.Item key={index} title={tab}>
              {tab} content
            </Tabs.Item>
          ))}
        </Tabs.Group>
      ),
    },
    {
      title: 'Programmatically Controlled Tabs',
      content: 'Use buttons to change the active tab dynamically.',
      code: (
        <>
          <Tabs.Group
            aria-label='Controlled tabs'
            style='default'
            ref={tabsRef}
            onActiveTabChange={(tab) => setActiveTab(tab)}
          >
            {['Profile', 'Dashboard', 'Settings', 'Contacts'].map((tab, index) => (
              <Tabs.Item key={index} title={tab} active={index === 0}>
                {tab} content
              </Tabs.Item>
            ))}
          </Tabs.Group>
          <div className='mt-3'>Active tab: {activeTab}</div>
          <Button.Group className='mt-3'>
            {['Profile', 'Dashboard', 'Settings', 'Contacts'].map((tab, index) => (
              <Button key={index} color='gray' onClick={() => tabsRef.current?.setActiveTab(index)}>
                {tab}
              </Button>
            ))}
          </Button.Group>
        </>
      ),
      rawCode: `const ControlledTabs: FC = () => {
        const [activeTab, setActiveTab] = useState<number>(0);
        const tabsRef = useRef<TabsRef>(null);
      
        return (
          <>
            <Tabs.Group
              aria-label="Controlled tabs"
              style="default"
              ref={tabsRef}
              onActiveTabChange={tab => setActiveTab(tab)}
            >
              {['Profile', 'Dashboard', 'Settings', 'Contacts'].map((tab, index) => (
                <Tabs.Item key={index} title={tab} active={index === 0}>
                  {tab} content
                </Tabs.Item>
              ))}
            </Tabs.Group>
            <div className="mt-3">Active tab: {activeTab}</div>
            <Button.Group className="mt-3">
              {['Profile', 'Dashboard', 'Settings', 'Contacts'].map((tab, index) => (
                <Button key={index} color="gray" onClick={() => tabsRef.current?.setActiveTab(index)}>
                  {tab}
                </Button>
              ))}
            </Button.Group>
          </>
        );
      };`,
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default TabsPage;
