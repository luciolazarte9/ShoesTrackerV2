import { Navigate } from "react-router-dom";


const RutasProtegidas = ({children}) => {
   const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null
   //pregunta si el usuarioLogueado esta vacio
   if(!usuarioLogueado){
    return <Navigate to={'/login'}></Navigate>
   }else{
    //si estoy logueado
    return children
   }
};

export default RutasProtegidas;