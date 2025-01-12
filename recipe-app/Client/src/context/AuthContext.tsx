import axios from 'axios';
import {createContext, ReactNode, useState} from 'react';

const API_URL = 'http://10.0.2.2:5000';

interface AuthContextData {
  token: string | null;
  isLoading: boolean;
  userId: string | null;
  signUp: (email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const signUp = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await axios.post(`${API_URL}/api/auth/register`, {
        email,
        password,
      });
      if (result?.data?.success) return true;
      else return false;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log('Error : ', error.response?.data);
      }
      return false;
    }
  };
  const login = async (email: string, password: string): Promise<boolean> => {
    return true;
  };
  const signOut = async (): Promise<void> => {};

  return (
    <AuthContext.Provider
      value={{token, isLoading, userId, signUp, login, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
