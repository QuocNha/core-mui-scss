import { Box, styled } from '@mui/material';
import SearchProductInput from './inputs/SearchProduct';

const FilterProductWrapper = styled(Box)(({ theme }) => ({}));

const FilterProduct = () => {
  return (
    <FilterProductWrapper>
      <SearchProductInput />
    </FilterProductWrapper>
  );
};

export default FilterProduct;
