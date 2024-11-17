import React from "react";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";

interface MensajesInformativosComponentProps//Asi se genera/dispara un evento modal
{ 
    modalAbierto: boolean, //Este garantiza el estado
    detalleMensaje: string,
    
    setModalAbierto : React.Dispatch<React.SetStateAction<boolean>>; //este lo habilita
}

const MensajesInformativosComponent: React.FC<MensajesInformativosComponentProps> = ({ modalAbierto, setModalAbierto, detalleMensaje }) =>{
    
    function cerrarModal()
    {
        setModalAbierto(false);
    }
    
    return <div>
            <Modal
                show={modalAbierto}
                onHide={cerrarModal}>
                <ModalHeader>
                    <ModalTitle>Detalle del modal</ModalTitle>
                </ModalHeader>
                <ModalBody>
                <p>{detalleMensaje}</p>
                </ModalBody>
            </Modal>
        </div>;
    }

export default MensajesInformativosComponent;