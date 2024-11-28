import CarouselComponent from "./components/CarouselComponent";
import ListaComponent from "./components/ServiciosComponent";

export default function Home() {

    return (
        <div>
            <div className="text-center bg-green-100 mx-auto">
                <CarouselComponent></CarouselComponent>
                <ListaComponent ></ListaComponent>
            </div>
        </div>
    );
}
