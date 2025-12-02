import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export const enum AuthStatus {
  CHECKING = "checking",
  AUTHENTICATED = "authenticated",
  NOT_AUTHENTICATED = "not-authenticated",
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking?: boolean;
  isAuthenticated?: boolean;
  loginWithEmailAndPassword: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  status: AuthStatus.CHECKING,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.CHECKING);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.NOT_AUTHENTICATED);
    }, 1500);
  }, []);

  const loginWithEmailAndPassword = (email: string, password: string): void => {
    console.log(password);
    setStatus(AuthStatus.CHECKING);
    setTimeout(() => {
      setUser({ id: "1", name: "John Doe", email });
      setStatus(AuthStatus.AUTHENTICATED);
    }, 1500);
  };

  const logout = (): void => {
    setStatus(AuthStatus.CHECKING);

    setTimeout(() => {
      setStatus(AuthStatus.NOT_AUTHENTICATED);
      setUser(undefined);
    }, 1500);
  };

  return (
    <AuthContext.Provider
      value={{
        status,
        user: user,
        isChecking: status === AuthStatus.CHECKING,
        isAuthenticated: status === AuthStatus.AUTHENTICATED,
        loginWithEmailAndPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
