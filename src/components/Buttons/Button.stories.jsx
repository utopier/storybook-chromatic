import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button Text'
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/tRp6Ye8ZlKnDKJPCGeRUJV/EDS-for-Studio?node-id=9%3A227'
  }
};
