import Button from './Button';
export default {
  title: 'Components/Button', // Storybook에서 컴포넌트가 표시될 위치
  component: Button, // 연결된 컴포넌트
};
const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  size: 'medium',
  color: 'primary',
};
export const Small = Template.bind({});
Small.args = {
  label: 'Small ',
  size: 'small',
  color: 'primary',
};
