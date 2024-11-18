//Acá importamos otros componentes o librearias

import CaptandoDatosBasicos from "../Components/CaptandoDatosBasicos";
import CaptandoDatosBasicosError from "../Components/CaptandoDatosBasicosError";

const hookuseref: React.FC = () => {
    return (
        <div>
            <CaptandoDatosBasicos></CaptandoDatosBasicos>
            <CaptandoDatosBasicosError></CaptandoDatosBasicosError>
        </div >
    )
}

export default hookuseref;