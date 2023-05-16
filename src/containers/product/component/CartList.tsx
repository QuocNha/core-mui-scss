import { Box, styled } from '@mui/material';
import AddCartButton from './buttons/AddCart';

const CartListWrapper = styled(Box)(({ theme }) => ({}));

const CartList = () => {
  return (
    <CartListWrapper>
      Cart List
      <AddCartButton />
    </CartListWrapper>
  );
};

export default CartList;
