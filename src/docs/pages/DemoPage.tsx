import type { FC, ReactNode } from 'react';
import type { Options } from 'react-element-to-jsx-string';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from '../../lib';

SyntaxHighlighter.registerLanguage('tsx', tsx);

export type CodeExample = {
  title: string;
  content?: ReactNode;
  code: ReactNode;
  showCode?: boolean;
  codeClassName?: string;
  codeStringifierOptions?: Options;
};

export type PageContent = {
  title: string;
  description: string;
  usage: () => string;
};

export type DemoPageProps = {
  examples: CodeExample[];
  pageContent: PageContent;
};

// TODO: add a table here with prop details
export const DemoPage: FC<DemoPageProps> = ({ examples, pageContent }) => {
  return (
    <div className='mx-auto flex max-w-4xl flex-col gap-8 dark:text-white'>
      <span className='text-3xl font-bold'>{pageContent.title}</span>
      <span className='py-4 text-xl'>{pageContent.description}</span>
      <span className='text-2xl font-bold'>Usage</span>
      <Card>
        <SyntaxHighlighter language='tsx' style={dracula}>
          {pageContent.usage()}
        </SyntaxHighlighter>
      </Card>

      {examples.map(
        (
          { title, content, code, showCode = true, codeClassName, codeStringifierOptions },
          index,
        ) => (
          <div key={index} className='flex flex-col gap-2'>
            <span className='text-2xl font-bold'>{title}</span>
            {content && <div className='py-4'>{content}</div>}
            <div className={codeClassName}>
              <Card>
                {showCode && code}
                <SyntaxHighlighter language='tsx' style={dracula}>
                  {reactElementToJSXString(code, {
                    showFunctions: true,
                    functionValue: (fn) => fn.name,
                    sortProps: false,
                    useBooleanShorthandSyntax: false,
                    useFragmentShortSyntax: false,
                    ...codeStringifierOptions,
                  })}
                </SyntaxHighlighter>
              </Card>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
