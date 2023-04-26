import { ReactNode } from 'react';
import HomeComponent from 'src/containers/home';
import UnAuthLayout from 'src/layouts/UnAuthLayout';

const Home = () => {
  return <HomeComponent />;
};

Home.getLayout = (page: ReactNode) => <UnAuthLayout>{page}</UnAuthLayout>;

export default Home;
