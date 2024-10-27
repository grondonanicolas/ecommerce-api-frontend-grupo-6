import PromoCodeInput from '../src/components/PromoCodeInput';

export default {
  title: 'Components/PromoCodeInput',
  component: PromoCodeInput,
};

const Template = (args) => <PromoCodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onApply: (code) => console.log('Applied promo code:', code),
};
