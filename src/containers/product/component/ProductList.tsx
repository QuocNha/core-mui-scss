import { Box, styled } from '@mui/material';
import ProductItem from './ProductItem';

const ProductListWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  columnGap: theme.spacing(5),
  rowGap: theme.spacing(5),
  marginTop: theme.spacing(10),
}));

const ProductList = () => {
  return (
    <ProductListWrapper>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ProductListWrapper>
  );
};

export default ProductList;
