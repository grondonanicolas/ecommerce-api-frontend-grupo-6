// CartItemList.stories.js
import { useState } from 'react';
import CartItemList from '../src/components/CartItemList';

export default {
  title: 'Components/CartItemList',
  component: CartItemList,
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);

  const handleQuantityChange = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartItemList
      items={items}
      onQuantityChange={handleQuantityChange}
      onRemove={handleRemove}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      imageUrl:
        'https://i5.walmartimages.com/seo/Men-s-4-Pieces-Suit-Elegant-Solid-One-Button-Slim-Fit-Single-Breasted-Party-Suit-Shirt-Pants-Tie-Set_7d1cfcce-0ff6-4cab-a11c-c2512fe877bd.d68551c60b2696a485fa729954122df0.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      name: 'Gradient Graphic T-shirt',
      price: 145,
      quantity: 1,
    },
    {
      id: 2,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qI74T2JTMHR9-iT9FxLxKSbvR2pgXKEUdA&s',
      name: 'Checkered Shirt',
      price: 180,
      quantity: 1,
    },
    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScv9pRpNlZwxhHh0eGK3yiegS7D-FBz8wc7g&s',
      name: 'Skinny Fit Jeans',
      price: 240,
      quantity: 1,
    },
  ],
};
