import { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { obtenerUnProducto } from "../helpers/queries";
import { Link, useParams } from "react-router-dom";


const DetalleProducto = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    obtenerUnProducto(id).then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <>
      <Container className="my-3 mainSection" key={productos.id}>
        <Card className="cards-disenio border-0 rounded-0 mt-5">
          <Row>
            <Col md={6}>
              <Card.Img
                className="rounded-0"
                variant="top"
                src={productos.imagen}
              />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title className="fw-bold display-3">
                  {productos.nombreProducto}
                </Card.Title>
                <hr />
                <Card.Text>
                  {productos.descripcion}
                  <br />
                  <hr />
                  <span className="text-danger fw-semibold">Categoria:</span>{" "}
                  {productos.categoria}
                  <br />
                  <span className="text-danger fw-semibold">Calidad: </span>
                  {productos.calidad}
                  <br />
                  <span className="text-danger fw-semibold">Color: </span>
                  {productos.color}
                  <br />
                  <span className="text-danger fw-semibold">Par: </span>
                  {productos.par}
                  <br />
                  <span className="text-danger fw-semibold">Fecha: </span>
                  {productos.fecha}
                  <br />
                  <span className="text-danger fw-semibold ">Talle: </span>{" "}
                  {productos.talle}
                  <br />
                  <hr />
                </Card.Text>
                <Button as={Link} to={'/administrador'} variant="primary" type="submit" className="mb-5 ">
                  Volver atras
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default DetalleProducto;
