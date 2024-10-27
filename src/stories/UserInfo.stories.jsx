import UserInfo from '../components/UserInfo';

export default {
  title: 'Components/UserInfo',
  component: UserInfo,
  argTypes: {
    user: {
      control: {
        type: 'object',
      },
    },
  },
};

const Template = (args) => <UserInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    name: 'John Doe',
    avatarUrl: 'https://via.placeholder.com/64',
    email: 'john.doe@example.com',
  },
};

export const CustomUser = Template.bind({});
CustomUser.args = {
  user: {
    name: 'Jane Smith',
    avatarUrl: 'https://via.placeholder.com/64?text=JS',
    email: 'jane.smith@example.com',
  },
};
