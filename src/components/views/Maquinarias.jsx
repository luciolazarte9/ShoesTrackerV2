import { Form, Table, Button } from "react-bootstrap";
import ItemMaquina from "./producto/ItemMaquina";
import { useState, useEffect } from "react"
import { obtenerMaquinas } from "../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Administrador = () => {
const [maquinas, setMaquinas] = useState([]);





useEffect(()=>{
  obtenerMaquinas().then((respuesta)=>{
    if (respuesta){
      setMaquinas(respuesta)
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
          <Link className="btn btn-primary" to='/administrador/crear-maquinas'>
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover className="mb-5">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>ID</th>
              <th>Trabajo</th>
              <th>Tareas</th>
              <th>Maquina</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              maquinas.map((maquina)=><ItemMaquina maquina={maquina} key={maquina.id} setMaquinas={setMaquinas}></ItemMaquina>)
            }
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;