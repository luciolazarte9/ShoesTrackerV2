import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerUnaMaquina, crearMaquina } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarMaquina = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    obtenerUnaMaquina(id).then((respuesta) => {
      console.log(respuesta);
      setValue('nombreMaquina', respuesta.nombreMaquina);
      setValue('trabajo', respuesta.trabajo);
      setValue('tareas', respuesta.tareas);
      setValue('imagen', respuesta.imagen);
    });
  }, []);


  const onSubmit = (maquinaNueva) => {
    console.log(maquinaNueva);
    //Pedir a la api crear producto. Si la respuesta es 201 entonces creo el producto, de lo contrario, mensaje de error
    crearMaquina(maquinaNueva).then((respuesta)=>{
      if(respuesta && respuesta.status === 201){
        Swal.fire('Maquina creada', `La maquina ${maquinaNueva.nombreMaquina} fue creada correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Oops! Ocurrio un error', `El producto ${maquinaNueva.nombreMaquina} no fue creado correctamente, intente nuevamente mas tarde`, 'error');
      }
    })
  }

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formNombreProdcuto">
        <Form.Label>Maquina</Form.Label>
        <Form.Control
          type="text"
          placeholder="ej: (nombre)"
          {...register("nombreMaquina", {
            required: "Detalle el nombre de la maquina",
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
          {errors.nombreMaquina?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label>Asignacion de tareas</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register("tareas", {
            required: "Asigna tareas para esta maquina",
          })}
        />
        <Form.Text className="text-danger">
          {errors.color?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTalle">
        <Form.Label>Trabajo</Form.Label>
        <Form.Select
          {...register("trabajo", {
            required: "El talle es obligatorio",
          })}
        >
          <option value="">Seleccione una opcion</option>
          <option value="Mantenimiento">Mantenimiento</option>
          <option value="Pausar produccion">Pausar produccio</option>
          <option value="Continuar produccion">Continuar produccion</option>
          <option value="Finalizar produccion">Finalizar produccion</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.trabajo?.message}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-5">
        Guardar
      </Button>
    </Form>
    </section>
  );
};

export default EditarMaquina;
