import OrderSummary from '../src/components/OrderSummary';

export default {
  title: 'Components/OrderSummary',
  component: OrderSummary,
};

const Template = (args) => <OrderSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  subtotal: 123123,
  discount: 113,
  discountPercentage: 20,
  deliveryFee: 15,
  total: 467,
};
