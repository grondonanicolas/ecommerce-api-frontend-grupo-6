import { useState } from 'react';
import CartItem from '../src/components/CartItem';

export default {
  title: 'Components/CartItem',
  component: CartItem,
};

const Template = (args) => {
  const [quantity, setQuantity] = useState(args.quantity);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <CartItem
      {...args}
      quantity={quantity}
      onQuantityChange={handleQuantityChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    'https://unblast.com/wp-content/uploads/2024/03/Mens-T-shirt-Mockup-PSD.jpg',
  name: 'Gradient Graphic T-shirt',
  price: 145,
  quantity: 1,
  onQuantityChange: (newQuantity) => console.log('New quantity:', newQuantity),
  onRemove: () => console.log('Item removed'),
};
