import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import Maquinarias from "../views/Maquinarias";
import EditarProducto from "../views/producto/EditarProducto";
import EditarMaquinas from "../views/producto/EditarMaquinas";
import CrearProducto from "../views/producto/CrearProducto";
import CrearMaquinas from "../views/producto/CrearMaquinas";



const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear-producto"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/crear-maquinas"
          element={<CrearMaquinas></CrearMaquinas>}
        ></Route>
        <Route
          exact
          path="/maquinarias"
          element={<Maquinarias></Maquinarias>}
        ></Route>
        <Route
          exact
          path="/editar-producto/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/editar-maquinas/:id"
          element={<EditarMaquinas></EditarMaquinas>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
