import PurchasedItemList from '../src/components/PurchasedItemList';

export default {
  title: 'Components/PurchasedItemList',
  component: PurchasedItemList,
  argTypes: {
    date: { control: 'text' },
    status: {
      control: { type: 'select' },
      options: ['Entregado', 'En camino', 'Cancelado'],
    },
    items: {
      control: 'object',
    },
  },
};

const Template = (args) => <PurchasedItemList {...args} />;

export const Delivered = Template.bind({});
Delivered.args = {
  date: '04 de Marzo',
  status: 'Entregado',
  items: [
    {
      name: 'Skinny Fit Jeans',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
    {
      name: 'T-shirt with Tape Details',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 2,
    },
  ],
};

export const InTransit = Template.bind({});
InTransit.args = {
  date: '10 de Abril',
  status: 'En camino',
  items: [
    {
      name: 'Vintage Jacket',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
    {
      name: 'Casual Shoes',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
    {
      name: 'Sunglasses',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
  ],
};

export const Canceled = Template.bind({});
Canceled.args = {
  date: '15 de Mayo',
  status: 'Cancelado',
  items: [
    {
      name: 'Formal Shirt',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
  ],
};
