import { Button } from '@mui/material';

export interface IAddProduct {
  title: string;
  handleClick?: () => void;
}

const AddProduct = ({ title = '', handleClick }: IAddProduct) => {
  return (
    <Button onClick={handleClick} variant="contained">
      {title}
    </Button>
  );
};

export default AddProduct;
