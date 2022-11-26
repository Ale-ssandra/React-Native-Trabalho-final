import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Load } from '../pages/Load';
import  { RotasPrivadas }  from './RotasPrivadas';
import { RotasPublicas } from './RotasPublicas';


const Routes = () => {
        const { logado, loading } = useContext(AuthContext)

        if(loading) return <Load />
   
       return logado ? <RotasPrivadas /> : <RotasPublicas />
}

export default Routes;