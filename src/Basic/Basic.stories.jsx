import React from 'react';

import { Basic } from './Basic';

export default {
  // title : '대분류/중분류'
  title: 'Basic',
  component: Basic,
  // 특정 argTypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  // 모든 Component 적용
  args: {
    primary: true
  }
};

const Template = args => <Basic {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
    // 실제 emoticbox figma 접근시 로그인 필요함.
  }
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button'
};

export const Accessible = () => <button>Accessible button</button>;

export const Inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
);
