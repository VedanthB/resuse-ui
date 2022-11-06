import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './docs/Root';
import './index.css';
import { ReuseUI } from './lib';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  const theme = {
    sidebar: {
      base: 'h-full bg-inherit',
      inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3',
    },
  };

  root.render(
    <ReuseUI theme={{ theme }}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ReuseUI>,
  );
}
