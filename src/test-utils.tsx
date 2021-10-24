import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

import Providers from 'components/Providers';

const customRender = (ui: React.ReactElement, options?: RenderOptions) => render(
  ui, { wrapper: Providers, ...options }
);

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { customRender as render };
