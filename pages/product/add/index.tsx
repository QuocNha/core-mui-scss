import React, { ReactNode } from 'react';
import ProductAddComponent from 'src/containers/product/add';
import UnAuthLayout from 'src/layouts/UnAuthLayout';

const ProductAddPage = () => {
  return <ProductAddComponent />;
};

ProductAddPage.getLayout = (page: ReactNode) => (
  <UnAuthLayout>{page}</UnAuthLayout>
);

export default ProductAddPage;
