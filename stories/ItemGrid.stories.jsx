import ItemGrid from '../src/components/ItemGrid';

export default {
  title: 'Components/ItemGrid',
  component: ItemGrid,
};

const Template = (args) => <ItemGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      imageUrl:
        'https://i5.walmartimages.com/seo/Men-s-4-Pieces-Suit-Elegant-Solid-One-Button-Slim-Fit-Single-Breasted-Party-Suit-Shirt-Pants-Tie-Set_7d1cfcce-0ff6-4cab-a11c-c2512fe877bd.d68551c60b2696a485fa729954122df0.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      title: 'Gradient Graphic T-shirt',
      price: 145,
    },
    {
      id: 2,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qI74T2JTMHR9-iT9FxLxKSbvR2pgXKEUdA&s',
      title: 'Polo with Tipping Details',
      price: 180,
    },
    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScv9pRpNlZwxhHh0eGK3yiegS7D-FBz8wc7g&s',
      title: 'Black Striped T-shirt',
      price: 120,
    },
    {
      id: 4,
      imageUrl:
        'https://unblast.com/wp-content/uploads/2024/03/Mens-T-shirt-Mockup-PSD.jpg',
      title: 'T-shirt with Tape Details',
      price: 130,
    },
    {
      id: 5,
      imageUrl:
        'https://thumbs.dreamstime.com/b/blue-polo-shirt-stripes-single-isolated-object-male-white-background-boy-s-clothes-child-fashion-clothing-t-nobody-331708651.jpg',
      title: 'T-shirt Polo',
      price: 110,
    },
    {
      id: 6,
      imageUrl:
        'https://i.pinimg.com/736x/2d/f3/ee/2df3ee4eb3de8f52400b87feec2a4166.jpg',
      title: 'Jean',
      price: 140,
    },
  ],
};
