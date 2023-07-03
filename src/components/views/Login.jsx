import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../helpers/queries"
import { useForm } from "react-hook-form"
import  Swal  from "sweetalert2"
import { useNavigate } from "react-router-dom"

const Login = ({setUsuarioLogueado}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navegacion = useNavigate();


  const cuandoEnvie = (usuario) => {
    login(usuario).then((respuesta)=>{
      console.log(respuesta);
      if(respuesta){
        sessionStorage.setItem('usuario', JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        navegacion('/administrador')
      }else{
        Swal.fire(
          'Oops! ocurrio un error',
          'El usuario o contrasena son erroneos',
          'error'
        )
      }
    });
  }

  return (
    <Container className="mainSection">
      <Card className="align-items-center border-0">
        <Card className="my-5 col-lg-6 rounded-0 border-0 cards-disenio">
          <h5 className="text-center">Iniciar sesion</h5>
          <Card.Body>
            <Form onSubmit={handleSubmit(cuandoEnvie)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese un email" 
                {...register('email', {
                  required: 'Este campo es obligatorio',
                  pattern: {
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: 'El email debe tener un formato valido (example@dominio.com)'
                  }
                })}
                />
                <Form.Text id="passwordHelpBlock" className="text-danger">
                { errors.email?.message }
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                   type="password"
                   placeholder="Password"
                {...register('password',{
                    required: 'La contrasena es obligatoria',
                    pattern:{
                      value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                      message: 'La contrasena debe contener entre 8 y 16 caracteres y debe incluir numeros, caracteres en mayuscula, miniscula y almenos un caracter especial'
                    }
                  })
                 }
                />
                <Form.Text className="text-danger">
                  { errors.password?.message}
                </Form.Text>
              </Form.Group>
              <Button variant="dark" type="submit">
                Ingresar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
};

export default Login;
