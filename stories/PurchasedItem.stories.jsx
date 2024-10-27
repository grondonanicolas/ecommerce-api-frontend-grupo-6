import PurchasedItem from '../src/components/PurchasedItem';

export default {
  title: 'Components/PurchasedItem',
  component: PurchasedItem,
  argTypes: {
    purchasedItem: {
      control: 'object',
    },
  },
};

const Template = (args) => <PurchasedItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  purchasedItem: {
    name: 'Skinny Fit Jeans',
    imageUrl: 'https://via.placeholder.com/300x300',
    quantity: 1,
  },
};

export const MultipleQuantity = Template.bind({});
MultipleQuantity.args = {
  purchasedItem: {
    name: 'T-shirt with Tape Details',
    imageUrl: 'https://via.placeholder.com/300x300?text=T-shirt',
    quantity: 3,
  },
};

export const CustomItem = Template.bind({});
CustomItem.args = {
  purchasedItem: {
    name: 'Vintage Jacket',
    imageUrl: 'https://via.placeholder.com/300x300?text=Jacket',
    quantity: 2,
  },
};
