import ItemPriceFilter from '../src/components/ItemPriceFilter';

export default {
  title: 'Components/ItemPriceFilter',
  component: ItemPriceFilter,
};

const Template = (args) => <ItemPriceFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  minPrice: 50,
  maxPrice: 200,
  onChange: (range) => console.log('Selected price range:', range),
};
