import BuscadorPersonas from "../Components/BuscadorPersonas";
import ContadorTareas from "../Components/ContadorTareas";
import TablaMultiplicar from "../Components/TablaMultiplicar";

const HookUseMemoView: React.FC = () => {
    return (
        <div className="container">
            <BuscadorPersonas></BuscadorPersonas>
            <TablaMultiplicar></TablaMultiplicar>
            <ContadorTareas></ContadorTareas>
        </div >
    )
}

export default HookUseMemoView;