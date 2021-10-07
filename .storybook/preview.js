import { themes } from '@storybook/theming';

import { GlobalStyle } from '../src/shared/globalStyles';

// https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
// - parameters
// - decorators
// - globalTypes

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' }
  },
  backgrounds: {
    default: 'figma',
    values: [
      {
        name: 'figma',
        value: '#E5E5E5'
      },
      {
        name: 'white',
        value: 'white'
      },
      {
        name: 'black',
        value: 'black'
      }
    ]
  }
};

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
];
