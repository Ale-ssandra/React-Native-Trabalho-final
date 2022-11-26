import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../services/api.js';
import {getCategoria, getLogin, getFood} from '../services/taskClient.js';

const AuthContext = createContext();


export const verificaEstaParada = async (userName, password) => {
 
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
  const [valorTotal, setValorTotal] = useState(0);
  
  const loginContext = async (userName, password) => {
    const login = await getLogin();
    const verific = login.data;
    verific.forEach(acesso => {
      if (userName == acesso.login && password == acesso.senha) {
        setUser(acesso)
        armazenaUsuario(acesso);
      }});
    };

    const armazenaUsuario = async (user) => {
       await AsyncStorage.setItem("@app_user", JSON.stringify(user))
    };
    const logoutContext = () => {
      setUser(null);
      AsyncStorage.clear();
    };
  const calculaValorTotal = async () => {
    let temp = 0;
    await carrinho.map(element => {
      temp = temp + (element.quantidade * element.preco);
    });
    setValorTotal(temp)
    console.log(valorTotal)
  }

  const adicionaCarrinho = async (item) =>{
    const id = carrinho.length + 1;   
    await setCarrinho([...carrinho ,{...item, id: id}]); 
  }

  const zeraCarrinho = () =>{
     setCarrinho([]);
  }

  const alteraQuantidade = (item, x) => {
    const indice = carrinho.findIndex(produto => produto.id == item.id);
    x == 1 ? carrinho[indice].quantidade += 1 : carrinho[indice].quantidade -= 1
    calculaValorTotal();
  }
  useEffect(() => {
    calculaValorTotal()
  },[carrinho])

  useEffect(() => {
    const verificaStorage = async () => {
       const userStorage = await AsyncStorage.getItem('@app_user');
       if (userStorage != null) {
         setUser(JSON.parse(userStorage));
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


  return (
    <AuthContext.Provider
      value={{
        logado: !!user,
        loginContext,
        logoutContext,
        loading: loading,
        produtos : produtos,
        categoria : categoria,
        carrinho : carrinho,
        adicionaCarrinho,
        zeraCarrinho,
        setCategoriaPesquisa: setCategoriaPesquisa,
        categoriaPesquisa: categoriaPesquisa,
        user: user,
        alteraQuantidade,
        valorTotal: valorTotal,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
