import { Button } from 'react-bootstrap';
import error from '../../assets/error404.gif'
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="error 404" />
            <div>
            <Button as={Link} to={'/'} variant='dark' >Volver a casa</Button>

            </div>
        </section>
    );
};

export default Error404;