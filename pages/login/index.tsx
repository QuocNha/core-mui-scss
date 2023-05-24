import { ReactNode } from 'react';
import LoginComponent from 'src/containers/login';
import LoginLayout from './Layout';

const LoginPage = () => {
  return <LoginComponent />;
};

LoginPage.getLayout = (page: ReactNode) => <LoginLayout>{page}</LoginLayout>;

export default LoginPage;
