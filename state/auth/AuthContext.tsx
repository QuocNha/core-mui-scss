interface IAuthProviderProps {
  children: any;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  return children;
};

export { AuthProvider };
