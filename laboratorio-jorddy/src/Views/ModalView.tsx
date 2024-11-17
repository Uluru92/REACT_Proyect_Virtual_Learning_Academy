import { useState } from "react";
import MensajesInformativosComponent from "../Components/MensajesInformativosComponent";


const ModalView: React.FC = () =>
{
    const [modalAbierto, setModalAbierto] = useState<boolean>(false);

    function AbrirModalDetalle() {
        setModalAbierto(true);
    }

    return (
        <div className="container">
            <h1>Ejercicio con modal</h1>
            <button onClick={AbrirModalDetalle}>Quiero ver mas informacion</button>
            <MensajesInformativosComponent
                modalAbierto={modalAbierto}
                setModalAbierto={setModalAbierto}></MensajesInformativosComponent>
        </div >
    )
}

export default ModalView;