import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Login } from '../pages/Login';
import  { RotasPrivadas }  from './RotasPrivadas';
import { RotasPublicas } from './RotasPublicas';


const Routes = () => {
        const { logado, loading } = useContext(AuthContext)

        if(loading) return < Login />
   
       return logado ? <RotasPrivadas /> : <RotasPublicas />
}

export default Routes;