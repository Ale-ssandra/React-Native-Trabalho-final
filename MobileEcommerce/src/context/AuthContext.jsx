import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../services/api.js';
import {getCategoria, getLogin, getFood} from '../services/taskClient.js';

const AuthContext = createContext();


export const verificaEstaParada = async (userName, password) => {
  const login = await getLogin();
  const verific = login.data;
  let retorno = false;
  verific.forEach(acesso => {
    console.log('a');
    if (userName == acesso.login && password == acesso.senha) {
      console.log('foi');
      retorno = true;
    }
  });
  return retorno; 
};

export const adicionarCarrinho = (props) => {
  setCarrinho(carrinho + props)
}

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [categoriaPesquisa, setCategoriaPesquisa] = useState(null);
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
    const buscaBanco = async () => {
      const cats = await getCategoria();
      const prods = await getFood();
      setCategoria(cats.data);
      setProdutos(prods);
    }
    buscaBanco();
    verificaStorage();
  }, []);

  const logoutContext = () => {
    setUser(null);
    AsyncStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        logado: !!user,
        loginContext,
        logoutContext,
        loading: loading,
        verificaEstaParada,
        produtos : produtos,
        categoria : categoria,
        adicionarCarrinho,
        setCategoriaPesquisa: setCategoriaPesquisa,
        categoriaPesquisa: categoriaPesquisa,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
