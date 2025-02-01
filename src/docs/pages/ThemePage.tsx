import type { FC, PropsWithChildren } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Alert, Card, DarkThemeToggle, ReuseUI, Table } from '../../lib';

const ThemePage: FC = () => {
  return (
    <div className='mx-auto max-w-4xl dark:text-white'>
      <h1 className='mb-3 text-2xl font-bold'>Theme</h1>
      <Alert color='warning' icon={HiInformationCircle}>
        This feature is highly experimental. Future updates may introduce significant changes.
      </Alert>
      <CustomizeReuseUIComponentsSection />
      <SwitchToDarkModeSection />
      <ReadTheThemeSection />
    </div>
  );
};

// ✅ Section: Customizing ReuseUI Components
const CustomizeReuseUIComponentsSection: FC = () => (
  <section className='mb-6'>
    <h2 className='my-3 text-xl font-bold'>Customize ReuseUI Components using Tailwind CSS</h2>
    <p className='mb-3'>
      You can customize ReuseUI by adding or removing Tailwind CSS classes from components.
      Different approaches have their pros and cons, and you can mix them as needed.
    </p>
    <ReuseUICustomizationOptionsTable />
    <BenefitsAndDrawbacks />
  </section>
);

// ✅ Table: Customization Options
const ReuseUICustomizationOptionsTable: FC = () => (
  <Table>
    <Table.Head>
      <Table.HeadCell className='w-64'>Option</Table.HeadCell>
      <Table.HeadCell>Example</Table.HeadCell>
    </Table.Head>
    <Table.Body>
      {customizationOptions.map(({ option, example }, index) => (
        <Table.Row key={index}>
          <Table.Cell>{option}</Table.Cell>
          <Table.Cell>
            <SyntaxHighlighter language='tsx' style={dracula}>
              {example}
            </SyntaxHighlighter>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

const customizationOptions = [
  {
    option: 'Custom theme',
    example: `const theme: CustomReuseUITheme = {
  accordion: {
    root: {
      base: 'bg-primary',
    },
  },
};

<ReuseUI theme={{ theme }}>...</ReuseUI>`,
  },
  {
    option: 'Custom component with className',
    example: `<Accordion className="bg-primary">
  <Accordion.Title>My accordion</Accordion.Title>
  <Accordion.Content>Contains</Accordion.Content>
</Accordion>`,
  },
  {
    option: 'Custom component with theme',
    example: `const accordionTheme: CustomReuseUITheme = {
  accordion: {
    root: {
      base: 'bg-primary',
    },
  },
}

<Accordion theme={{ accordionTheme }}>
  <Accordion.Title>My accordion</Accordion.Title>
  <Accordion.Content>Contains</Accordion.Content>
</Accordion>`,
  },
];

// ✅ Section: Benefits and Drawbacks
const BenefitsAndDrawbacks: FC = () => (
  <div>
    {benefitsDrawbacksData.map(({ title, benefits, drawbacks }, index) => (
      <div key={index}>
        <h3 className='mt-6 mb-3 text-lg font-bold'>{title}</h3>
        <ul className='list-none [&>li]:mb-2'>
          {benefits.map((text, i) => (
            <Benefit key={i}>{text}</Benefit>
          ))}
          {drawbacks.map((text, i) => (
            <Drawback key={i}>{text}</Drawback>
          ))}
        </ul>
      </div>
    ))}
    <Disclaimer />
  </div>
);

const benefitsDrawbacksData = [
  {
    title: 'Benefits & Drawbacks of Custom Themes',
    benefits: [
      'You can customize every component globally in one place.',
      'Changes apply to all instances of the component in your app.',
      'Best performance compared to other methods.',
    ],
    drawbacks: ['Customizations may become complex and hard to maintain in one large JSON file.'],
  },
  {
    title: 'Benefits & Drawbacks of Custom Components with className',
    benefits: ['Quick and easy customization.', 'No need to learn the theme API.'],
    drawbacks: [
      "Nested elements can't be styled with className alone.",
      'Each instance must be customized separately unless you create a reusable wrapper.',
    ],
  },
  {
    title: 'Benefits & Drawbacks of Custom Components with theme',
    benefits: ['Allows styling of nested elements.', 'You can create reusable custom components.'],
    drawbacks: [
      'Adds complexity to the application.',
      'Potential performance degradation at scale.',
    ],
  },
];

const Disclaimer: FC = () => (
  <p className='text-gray-700 dark:text-gray-400'>
    <strong>Disclaimer:</strong> Performance testing is limited. Using the <strong>theme</strong>{' '}
    attribute involves deep object merging, which may impact performance when heavily used.
  </p>
);

// ✅ Reusable Components for Benefits and Drawbacks
const Benefit: FC<PropsWithChildren> = ({ children }) => (
  <li className='flex items-center gap-3 text-green-700 dark:text-green-100'>
    <FaPlus aria-hidden className='w-6' />
    <span className='sr-only'>Benefit:</span>
    {children}
  </li>
);

const Drawback: FC<PropsWithChildren> = ({ children }) => (
  <li className='flex items-center gap-3 text-red-700 dark:text-red-100'>
    <FaMinus aria-hidden className='w-6' />
    <span className='sr-only'>Drawback:</span>
    {children}
  </li>
);

// ✅ Section: Dark Mode Toggle
const SwitchToDarkModeSection: FC = () => (
  <section className='mb-6'>
    <h2 className='mb-3 text-xl font-bold'>Switch to Dark Theme</h2>
    <p className='mb-3'>
      The <strong>&lt;DarkThemeToggle/&gt;</strong> component allows toggling between light and dark
      themes.
    </p>
    <Card>
      <SyntaxHighlighter language='tsx' style={dracula}>
        {reactElementToJSXString(
          <ReuseUI>
            <DarkThemeToggle />
          </ReuseUI>,
          { showFunctions: true, functionValue: (fn) => fn.name, sortProps: false },
        )}
      </SyntaxHighlighter>
    </Card>
  </section>
);

// ✅ Section: Read Theme Data
const ReadTheThemeSection: FC = () => (
  <section className='mb-6'>
    <h2 className='mb-3 text-xl font-bold'>Read the Theme</h2>
    <p className='mb-3'>
      You can retrieve active Tailwind CSS classes via <strong>useTheme</strong> and check the
      current theme mode using <strong>useThemeMode</strong>.
    </p>
    <Card>
      <SyntaxHighlighter language='tsx' style={dracula}>
        {`const theme = useTheme().theme.button; // -> { base: "..", color: { ... }, ... }`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='tsx' style={dracula}>
        {`const [mode, setMode, toggleMode] = useThemeMode(); // -> ["light", ...]`}
      </SyntaxHighlighter>
    </Card>
  </section>
);

export default ThemePage;
