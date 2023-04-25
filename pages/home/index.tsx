import React, { ReactNode } from 'react';
import HomeComponent from 'src/containers/home';
import UnAuthLayout from 'src/layouts/UnAuthLayout';

const HomePage = () => {
  return <HomeComponent />;
};

HomePage.getLayout = (page: ReactNode) => <UnAuthLayout>{page}</UnAuthLayout>;

export default HomePage;
