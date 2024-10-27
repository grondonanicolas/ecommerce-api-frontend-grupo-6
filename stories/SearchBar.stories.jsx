import SearchBar from '../src/components/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Buscar' },
    backgroundColor: { control: 'color', defaultValue: '#f0f0f0' },
  },
};

const Template = (args) => (
  <div style={{ maxWidth: '500px' }}>
    {' '}
    {/* Adjust maxWidth for preview layout */}
    <SearchBar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: 'Search here...',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  sx: {
    backgroundColor: '#e0e0ff',
    borderRadius: '50px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '50px',
      paddingLeft: 2,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
};
