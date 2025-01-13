import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {createContext, ReactNode, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

const API_URL = 'http://10.0.2.2:5000';

interface AuthContextData {
  token: string | null;
  isLoading: boolean;
  userId: string | null;
  signUp: (email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  checkAuth: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async (): Promise<boolean> => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUserId = await AsyncStorage.getItem('userId');

      if (storedToken && storedUserId) {
        setToken(storedToken);
        setUserId(storedUserId);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

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
    try {
      const result = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      const {token, userId, success} = result?.data;
      if (success) {
        await AsyncStorage.setItem('token', token);
        setToken(token);
        await AsyncStorage.setItem('userId', userId);
        setUserId(userId);
        setIsAuthenticated(true);
        return true;
      } else return false;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log('Error : ', error.response?.data);
      }
      return false;
    }
  };
  const signOut = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      setIsAuthenticated(false);
      setToken(null);
      setUserId(null);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoading,
        isAuthenticated,
        userId,
        checkAuth,
        signUp,
        login,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
