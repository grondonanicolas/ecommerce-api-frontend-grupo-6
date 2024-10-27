import ItemCategoriesFilter from '../src/components/ItemCategoriesFilter';

export default {
  title: 'Components/ItemCategoriesFilter',
  component: ItemCategoriesFilter,
};

const Template = (args) => <ItemCategoriesFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemCategories: [
    'Shirt',
    'Pants',
    'Shoes',
    'Jacket',
    'Shorts',
    'Sweater',
    'Hat',
  ],
};
