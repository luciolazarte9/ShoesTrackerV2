import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProducto, obtenerProductos } from "../../helpers/queries";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto, setProductos }) => {
  const eliminarProducto = () => {
    borrarProducto(producto.id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto eliminado",
          `El producto ${producto.nombreProducto} fue eliminado correctamente`,
          "success"
        );
        //reload tabla
        obtenerProductos().then((respuesta) => {
          if (respuesta) {
            setProductos(respuesta);
          }
        });
      } else {
        Swal.fire(
          "No se pudo eliminar",
          `El producto ${producto.nombreProducto} no fue eliminado correctamente`,
          "error"
        );
      }
    });
  };

  return (
    <tr>
      <td>{producto.fecha}</td>
      <td>{producto.id}</td>
      <td>{producto.talle}</td>
      <td><Link to={"/detalle/"+producto.id}>{producto.nombreProducto}</Link></td>
      <td>{producto.calidad}</td>
      <td><img src={producto.imagen} alt="" className="tamano-imagen" /></td>
      <td>{producto.categoria}</td>
      <td>
        <Link className="btn btn-primary mt-2 w-100" to={'/administrador/editar-producto/'+producto.id}>Editar</Link>
        <Button className="mt-2 w-100" variant="danger" onClick={eliminarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
