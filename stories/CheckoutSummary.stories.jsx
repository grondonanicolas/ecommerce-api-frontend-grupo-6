import CheckoutSummary from '../src/components/CheckoutSummary';

export default {
  title: 'Components/CheckoutSummary',
  component: CheckoutSummary,
};

const Template = (args) => <CheckoutSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  subtotal: 565,
  discount: 113,
  discountPercentage: 20,
  deliveryFee: 15,
  total: 467,
  onApplyPromoCode: (code) => console.log('Promo code applied:', code),
  onCheckout: () => console.log('Proceeding to checkout...'),
};
