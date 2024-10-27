import { useState } from 'react';
import PaginationBar from '../src/components/PaginationBar';

export default {
  title: 'Components/PaginationBar',
  component: PaginationBar,
  argTypes: {
    totalPages: { control: { type: 'number', min: 1 } },
    currentPage: { control: { type: 'number', min: 1 } },
  },
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <PaginationBar
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
};
