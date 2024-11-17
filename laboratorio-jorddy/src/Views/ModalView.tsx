import { useState } from "react";
import '../css/estilosConsolas.css'
import MensajesInformativosComponent from "../Components/MensajesInformativosComponent";
import { Card, CardImg } from "react-bootstrap";


const ModalView: React.FC = () =>
{
    const [modalAbierto, setModalAbierto] = useState<boolean>(false);

    function AbrirModalDetalle() {
        setModalAbierto(true);
    }

    return (
        <div className="container">
            <h1>Ejercicio con modal</h1>
            <Card className="estiloContenedorConsola">
                <CardImg src={require('../img/playStation5.png')}></CardImg>
                <button className="btn btn-warning" onClick={AbrirModalDetalle}>Quiero ver mas informacion</button>
                <MensajesInformativosComponent
                    modalAbierto={modalAbierto}
                    setModalAbierto={setModalAbierto}
                    detalleMensaje="Consola Play 1"></MensajesInformativosComponent>
            </Card>

            <Card className="estiloContenedorConsola">
                <CardImg src={require('../img/xbox.png')}></CardImg>
                <button className="btn btn-warning" onClick={AbrirModalDetalle}>Quiero ver mas informacion</button>
                <MensajesInformativosComponent
                    modalAbierto={modalAbierto}
                    setModalAbierto={setModalAbierto}
                    detalleMensaje="xbox"></MensajesInformativosComponent>
            </Card>

            <Card className="estiloContenedorConsola">
                <CardImg src={require('../img/nintendo.png')}></CardImg>
                <button className="btn btn-warning" onClick={AbrirModalDetalle}>Quiero ver mas informacion</button>
                <MensajesInformativosComponent
                    modalAbierto={modalAbierto}
                    setModalAbierto={setModalAbierto}
                    detalleMensaje="nintendo"></MensajesInformativosComponent>
            </Card>
        </div >
    )
}

export default ModalView;