import { styled } from '@mui/material';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import FilterProduct from './component/FilterProduct';

const ProductWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: theme.spacing(5),
}));

const ProductContainer = styled('div')(({ theme }) => ({
  flexGrow: '1',
  color: theme.palette.customColors.main,
}));

const Product = () => {
  return (
    <ProductWrapper>
      <ProductContainer>
        <FilterProduct />
        <ProductList />
      </ProductContainer>

      <CartList />
    </ProductWrapper>
  );
};

export default Product;
