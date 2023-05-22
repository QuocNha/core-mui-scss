import { Button } from '@mui/material';

export interface IAddProduct {
  title: string;
}

const AddProduct = ({ title = '' }: IAddProduct) => {
  return <Button variant="contained">{title}</Button>;
};

export default AddProduct;
