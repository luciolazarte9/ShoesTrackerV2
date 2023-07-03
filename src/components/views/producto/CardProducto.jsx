import { Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../../helpers/queries";
import { Link } from "react-router-dom";



const CardProducto = () => {

    const [productos, setProductos] = useState([]);


  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <>
    {productos?.map((producto)=>(
      <Col md={4} ld={3} className="mb-3" key={producto.id}>
        <Card className="rounded-0 cards-disenio border-0">
          <Card.Img className="rounded-0"
            variant="top"
            src={producto.imagenProd}
          />
          <Card.Body>
            <Card.Title>{producto.nombreProducto}</Card.Title>
            <Card.Text>{producto.categoria}</Card.Text>
            <Link className="btn btn-primary" variant="primary" to={"/detalle/"+producto.id}>Ver producto</Link>
          </Card.Body>
        </Card>
      </Col>
    ))} </>
      
  );
};

export default CardProducto;
