import { createContext, useEffect, useState } from "react"
import api from "../services/api"

const ProductsContext = createContextext()

export const ProductsProvider = ({children}) => {
    const [produtos, setProdutos] = useState([]);



    useEffect(() =>{
        const pegaProdutos = async() => {
            const produtosRepository = await api.get('/food');
            setProdutos(produtosRepository);
        }
        pegaProdutos()
    }, [])




    return(
        <ProductsContext.Provider value={produtos}>
            {children}
        </ProductsContext.Provider>
    );
}

