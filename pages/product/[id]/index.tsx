import { ReactNode } from 'react';
import Product from 'src/containers/product';
import UnAuthLayout from 'src/layouts/UnAuthLayout';

const ProductByIdPage = () => {
  return <Product />;
};

ProductByIdPage.getLayout = (page: ReactNode) => (
  <UnAuthLayout>{page}</UnAuthLayout>
);

export default ProductByIdPage;
