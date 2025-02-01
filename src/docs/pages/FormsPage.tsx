import { FC, useState } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { HiMail } from 'react-icons/hi';

import { DemoPage } from './DemoPage';
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  TextInput,
  ToggleSwitch,
} from '../../lib';

const FormsPage: FC = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  const pageContent: PageContent = {
    title: 'Forms',
    description:
      'The Forms component includes a set of input elements such as text fields, checkboxes, radio buttons, dropdowns, and more. Easily build interactive forms with validation, accessibility, and custom styling using ReuseUI and Tailwind CSS.',
    usage: () => `import { Forms } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Form',
      content:
        'A simple form with email and password fields, along with a "Remember me" checkbox and submit button.',
      code: (
        <form className='flex flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='email1' value='Your email' />
            </div>
            <TextInput id='email1' type='email' placeholder='name@gmail.com' required />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='password1' value='Your password' />
            </div>
            <TextInput id='password1' type='password' required />
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='remember' />
            <Label htmlFor='remember'>Remember me</Label>
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      ),
    },
    {
      title: 'Input Sizing',
      content:
        'Demonstrates different input sizes (small, medium, and large) for better UI adaptability.',
      code: (
        <div className='flex flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='small' value='Small input' />
            </div>
            <TextInput id='small' type='text' sizing='sm' />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='base' value='Base input' />
            </div>
            <TextInput id='base' type='text' sizing='md' />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='large' value='Large input' />
            </div>
            <TextInput id='large' type='text' sizing='lg' />
          </div>
        </div>
      ),
    },
    {
      title: 'Disabled Inputs',
      content:
        'Inputs that are either disabled or read-only, preventing user interaction while displaying data.',
      code: (
        <div className='flex flex-col gap-4'>
          <Label htmlFor='disabledInput1'>API token</Label>
          <TextInput type='text' id='disabledInput1' placeholder='Disabled input' disabled />
          <Label htmlFor='disabledInput2'>Personal access token</Label>
          <TextInput
            type='text'
            id='disabledInput2'
            placeholder='Disabled readonly input'
            disabled
            readOnly
          />
        </div>
      ),
    },
    {
      title: 'Helper Text',
      content:
        'Adds an additional helper text below an input field to provide extra information or guidance.',
      code: (
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email3' value='Your email' />
          </div>
          <TextInput
            id='email3'
            type='email'
            placeholder='name@gmail.com'
            required
            helperText={
              <>
                We’ll never share your details. Read our
                <a
                  href='/forms'
                  className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                >
                  Privacy Policy
                </a>
                .
              </>
            }
          />
        </div>
      ),
    },
    {
      title: 'Input with Icons',
      content:
        'Input elements with icons on the left, right, or both sides, improving visual clarity and usability.',
      code: (
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email4' value='Your email' />
          </div>
          <TextInput
            id='email4'
            type='email'
            icon={HiMail}
            rightIcon={HiMail}
            placeholder='name@gmail.com'
            required
          />
        </div>
      ),
    },
    {
      title: 'Checkbox Group',
      content:
        'Multiple checkboxes for user selection, useful for accepting terms, enabling features, or filtering content.',
      code: (
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <Checkbox id='accept' defaultChecked />
            <Label htmlFor='accept'>
              I agree to the&nbsp;
              <a href='/forms' className='text-blue-600 hover:underline dark:text-blue-500'>
                terms and conditions
              </a>
            </Label>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='promotion' />
            <Label htmlFor='promotion'>I want to get promotional offers</Label>
          </div>
        </div>
      ),
    },
    {
      title: 'Radio Buttons',
      content:
        'Allows users to select a single option from multiple choices, ideal for forms requiring exclusive selection.',
      code: (
        <fieldset className='flex flex-col gap-4'>
          <legend>Choose your favorite country</legend>
          <div className='flex items-center gap-2'>
            <Radio id='united-state' name='countries' value='USA' defaultChecked />
            <Label htmlFor='united-state'>United States</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Radio id='germany' name='countries' value='Germany' />
            <Label htmlFor='germany'>Germany</Label>
          </div>
        </fieldset>
      ),
    },
    {
      title: 'File Upload',
      content:
        'Allows users to upload files with an optional helper text to guide them through the process.',
      code: (
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='file' value='Upload file' />
          </div>
          <FileInput id='file' helperText='A profile picture is useful to confirm your identity.' />
        </div>
      ),
    },
    {
      title: 'Toggle Switch',
      content:
        'A simple toggle switch for enabling or disabling options, often used in settings panels.',
      code: (
        <div className='flex flex-col gap-4'>
          <ToggleSwitch checked={switch1} label='Toggle me' onChange={setSwitch1} />
          <ToggleSwitch checked={switch2} label='Toggle me (checked)' onChange={setSwitch2} />
        </div>
      ),
    },
    {
      title: 'Range Slider',
      content:
        'A range input slider for selecting a numeric value within a predefined range, useful for settings like brightness or volume control.',
      code: (
        <div className='flex flex-col gap-4'>
          <div>
            <div className='mb-1 block'>
              <Label htmlFor='default-range' value='Default' />
            </div>
            <RangeSlider id='default-range' />
          </div>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default FormsPage;
