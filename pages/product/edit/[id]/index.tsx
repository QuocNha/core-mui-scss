import React, { ReactNode } from 'react';
import ProductEditComponent from 'src/containers/product/edit';
import UnAuthLayout from 'src/layouts/UnAuthLayout';

const ProductEditPage = () => {
  return <ProductEditComponent />;
};

ProductEditPage.getLayout = (page: ReactNode) => (
  <UnAuthLayout>{page}</UnAuthLayout>
);

export default ProductEditPage;
