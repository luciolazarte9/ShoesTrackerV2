import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerUnProducto, editarProducto } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    obtenerUnProducto(id).then((respuesta) => {
      console.log(respuesta);
      setValue('nombreProducto', respuesta.nombreProducto);
      setValue('precio', respuesta.precio);
      setValue('categoria', respuesta.categoria);
      setValue('color', respuesta.color);
      setValue('descripcion', respuesta.descripcion);
      setValue('talle', respuesta.talle);
      setValue('imagen', respuesta.imagen);
    });
  }, []);

  const onSubmit = (productoNuevo) => {
    console.log(productoNuevo);
    //Llamar a la peticion para editar un producto
    editarProducto(productoNuevo, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto actualizado",
          `El producto: ${productoNuevo.nombreProducto} fue actualizado correctamente`,
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El producto: ${productoNuevo.nombreProducto} no fue actualizado, intente esta operacion en breve`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formNombreProdcuto">
        <Form.Label>Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Zapatilla (nombre)"
          {...register("nombreProducto", {
            required: "Detalle el nombre de la zapatilla",
            minLength: {
              value: 2,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
            maxLength: {
              value: 100,
              message: "La cantidad maxima de caracteres es de 100 digitos",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.nombreProducto?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCategoria">
        <Form.Label>Calidad</Form.Label>
        <Form.Select
          {...register("calidad", {
            required: "Definir la calidad es obligatorio",
          })}
        >
          <option value="">Seleccione una opcion</option>
          <option value="Primera calidad">Primera calidad</option>
          <option value="Segunda calidad">Segunda calidad</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formImagen" className="mb-3">
        <Form.Label>Cargar imagen</Form.Label>
        <Form.Control type="file"
                  {...register("imagenProducto", {
                    required: "La imagen es obligatoria",
                    minLength: {
                      value: 2,
                      message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                    maxLength: {
                      value: 100,
                      message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                  })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("color", {
            required: "El color del producto es obligatorio",
          })}
        />
        <Form.Text className="text-danger">
          {errors.color?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("descripcion", {
            required: "La descripcion del producto es obligatoria",
            minLength: {
              value: 2,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
            maxLength: {
              value: 100,
              message: "La cantidad minima de caracteres es de 2 digitos",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcion?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Par</Form.Label>
        <Form.Control
          type="text"
          placeholder="ej: Izquierdo, derecho o ambos"
          {...register("cantidad", {
            required: "Especifique el par de zapatillas con el que esta tratando",
            minLength: {
              value: 4,
              message: "Por favor escriba Izquierdo o Derecho.",
            },
            maxLength: {
              value: 10,
              message: "Por favor escriba Izquierdo o Derecho.",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.precio?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formImagen">
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("imagen")}
        />
        <Form.Text className="text-danger">
          {errors.imagen?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTalle">
        <Form.Label>Talle</Form.Label>
        <Form.Select
          {...register("talle", {
            required: "El talle es obligatorio",
          })}
        >
          <option value="">Seleccione una opcion</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="39">40</option>
          <option value="39">41</option>
          <option value="39">42</option>
          <option value="39">43</option>
          <option value="39">44</option>
          <option value="39">45</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.talle?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCategoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Select
          {...register("categoria", {
            required: "La categoria es obligatoria",
          })}
        >
          <option value="">Seleccione una opcion</option>
          <option value="Zapatillas Sportwear">Zapatillas Sportwear</option>
          <option value="Botas de Fútbol">Botas de Fútbol</option>
          <option value="Zapatillas de Running">Zapatillas de Running</option>
          <option value="Zapatillas de Montaña">Zapatillas de Montaña</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-5">
        Guardar
      </Button>
    </Form>
    </section>
  );
};

export default EditarProducto;
