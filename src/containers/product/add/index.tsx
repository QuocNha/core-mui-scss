import { styled } from '@mui/material';
import ProductFormComponent from '../components/ProductForm';

const ProductAddWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ProductAddComponent = () => {
  return (
    <ProductAddWrapper>
      <ProductFormComponent />
    </ProductAddWrapper>
  );
};

export default ProductAddComponent;
