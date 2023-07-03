import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarMaquina,  obtenerMaquinas } from "../../helpers/queries";
import { Link } from "react-router-dom";

const ItemMaquina = ({ maquina, setMaquinas }) => {
  const eliminarMaquina = () => {
    borrarMaquina(maquina.id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto eliminado",
          `El producto ${maquina.nombreMaquina} fue eliminado correctamente`,
          "success"
        );
        //reload tabla
        obtenerMaquinas().then((respuesta) => {
          if (respuesta) {
            setMaquinas(respuesta);
          }
        });
      } else {
        Swal.fire(
          "No se pudo eliminar",
          `El producto ${maquina.nombreMaquina} no fue eliminado correctamente`,
          "error"
        );
      }
    });
  };

  return (
    <tr>
      <td>{maquina.fecha}</td>
      <td>{maquina.id}</td>
      <td>{maquina.trabajo}</td>
      <td><Link to={"/administrador/editar-maquinas/"+maquina.id}>{maquina.nombreMaquina}</Link></td>
      <td>{maquina.tareas}</td>
      <td>
        <Link className="btn btn-primary mt-2 w-100" to={'/administrador/editar-maquinas/'+maquina.id}>Editar</Link>
        <Button className="mt-2 w-100" variant="danger" onClick={eliminarMaquina}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemMaquina;
