import { Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyCarousel() {
    return (
        <div className='w-100 h-50'>
        <Carousel interval={3000} wrap={true}>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/imagenes/carro1.png"
                    alt="Primera imagen"
                    style={{ width: '20%', height: '750px' }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/imagenes/caro2.png"
                    alt="Segunda imagen"
                    style={{ maxWidth: '100%', height: '750px' }}
                />
                <Carousel.Caption>
                    <h3>Creamos tus diseños</h3>
                    <p>Forros Personalizados</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/imagenes/caro3.png"
                    alt="Primera imagen"
                    style={{ width: '20%', height: '750px' }}
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default MyCarousel;
