import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api.js';



const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginContext = async () => {
     const response =  await login();
     if(response.token && response.user){
        setUser(response.user)
        api.defaults.headers['Authorization'] = `Bearer ${response.token}`
        await AsyncStorage.setItem("@app_user", JSON.stringify(response.user))
        await AsyncStorage.setItem("@app_token", response.token)
     }
    }

    useEffect(() => {
        const verificaStorage = async () => {
            const userStorage =  await AsyncStorage.getItem("@app_user")
            const tokenStorage = await AsyncStorage.getItem("@app_token")

            if(userStorage != null && tokenStorage != null){
                setUser(JSON.parse(userStorage));
                api.defaults.headers['Authorization'] = `Bearer ${tokenStorage}`
            }
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        }
        verificaStorage();
    }, [])

    const logoutContext = () => {
        setUser(null)
        AsyncStorage.clear();
    }


    return(
        <AuthContext.Provider value={{logado: !!user, loginContext, logoutContext, loading: loading}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;

