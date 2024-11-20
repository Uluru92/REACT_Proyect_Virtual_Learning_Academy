import BuscadorPersonas from "../Components/BuscadorPersonas";
import TablaMultiplicar from "../Components/TablaMultiplicar";

const HookUseMemoView: React.FC = () => {
    return (
        <div className="container">
            <BuscadorPersonas></BuscadorPersonas>
            <TablaMultiplicar></TablaMultiplicar>
        </div >
    )
}

export default HookUseMemoView;