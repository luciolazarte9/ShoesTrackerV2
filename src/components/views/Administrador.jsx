import { Form, Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useState, useEffect } from "react"
import { obtenerProductos } from "../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Administrador = () => {
const [productos, setProductos] = useState([]);




useEffect(()=>{
  obtenerProductos().then((respuesta)=>{
    if (respuesta){
      setProductos(respuesta)
    }else{
      Swal.fire('Ocurrio un error', 'Intente nuevamente en unos minutos', 'error')
    }
  })
}, [])

    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <Link className="btn btn-primary" to='/administrador/crear-producto'>
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover className="mb-5">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cod</th>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Calidad</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((producto)=><ItemProducto producto={producto} key={producto.id} setProductos={setProductos}></ItemProducto>)
            }
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;