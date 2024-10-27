import ItemFilterBar from '../src/components/ItemFilterBar';

export default {
  title: 'Components/ItemFilterBar',
  component: ItemFilterBar,
};

const Template = (args) => <ItemFilterBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemCategories: ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'],
  minPrice: 50,
  maxPrice: 200,
  onPriceChange: (range) => console.log('Selected price range:', range),
  onApplyFilters: () => console.log('Filters applied'),
};
