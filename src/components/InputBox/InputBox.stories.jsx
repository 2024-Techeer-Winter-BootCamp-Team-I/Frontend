import InputBox from './InputBox';

export default {
  title: 'Components/InputBox',
  component: InputBox,
};

const Template = (args) => <InputBox {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: '작은 입력창',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: '중간 입력창',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: '큰 입력창',
};
