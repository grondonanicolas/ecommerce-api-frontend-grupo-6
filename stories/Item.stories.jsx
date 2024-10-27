import Item from '../src/components/Item';

export default {
  title: 'Components/Item',
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    'https://unblast.com/wp-content/uploads/2024/03/Mens-T-shirt-Mockup-PSD.jpg',
  title: 'T-shirt with Tape Details',
  price: 120,
};
