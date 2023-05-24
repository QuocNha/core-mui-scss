import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { LoginForm } from 'src/containers/login';

interface IAuthProviderProps {
  children: any;
}

export interface IUserInformation {
  email: string;
  password: string;
}
export interface IAuthContext {
  userInformation?: IUserInformation | undefined;
  setUserInformation?: Dispatch<SetStateAction<IUserInformation | undefined>>;
  login: (body: LoginForm, onSuccess: () => void, onError: () => void) => void;
  logout: () => void;
}

const defaultValue: IAuthContext = {
  userInformation: undefined,
  setUserInformation: undefined,
  login: () => undefined,
  logout: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

const AuthProvider: React.FC<IAuthProviderProps> = (props) => {
  const { children } = props;
  const [userInformation, setUserInformation] = useState<IUserInformation>();

  const login = async (body: LoginForm, onSuccess?: () => void) => {
    onSuccess?.();
    setUserInformation({
      email: body?.email,
      password: body?.password,
    });
  };

  const logout = async () => {
    setUserInformation(undefined);
  };

  const authSetting = useMemo(
    () => ({
      userInformation,
      setUserInformation,
      login,
      logout,
    }),
    [userInformation, setUserInformation, login, logout]
  );

  return (
    <AuthContext.Provider value={authSetting}>{children}</AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthContext, AuthProvider, useAuth };
