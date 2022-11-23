import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../services/api.js';
import {getLogin} from '../services/taskClient.js';

const AuthContext = createContext();

export const verificaEstaParada = async (loginInserido, senhaInserida) => {
     const teste = await getLogin();
     const verific = teste.data;
      verific.forEach((acesso)=>{
      console.log("aqui")  
        console.log(acesso)
        if(loginInserido == acesso.login && senhaInserida == acesso.senha) {
            alert("Biruleibe")
        }
    })
  };

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [carrinho, setCarrinho] = useState([]);

  const loginContext = async () => {
    const response = await login();
    if (response.token && response.user) {
      setUser(response.user);
      api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
      await AsyncStorage.setItem('@app_user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@app_token', response.token);
    }
  };

  useEffect(() => {
    const verificaStorage = async () => {
      const userStorage = await AsyncStorage.getItem('@app_user');
      const tokenStorage = await AsyncStorage.getItem('@app_token');

      if (userStorage != null && tokenStorage != null) {
        setUser(JSON.parse(userStorage));
        api.defaults.headers['Authorization'] = `Bearer ${tokenStorage}`;
      }
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    verificaStorage();
  }, []);

  const logoutContext = () => {
    setUser(null);
    AsyncStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{logado: !!user, loginContext, logoutContext, loading: loading, verificaEstaParada}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
