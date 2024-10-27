import SignupForm from '../src/components/SignupForm';

export default {
  title: 'Components/SignupForm',
  component: SignupForm,
};

const Template = (args) => <SignupForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
