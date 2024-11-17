//Acá importamos otros componentes o librearias

interface HelloWorldComponent{
    Name: string,
    LastName: string
}

const HelloWorldComponent: React.FC<HelloWorldComponent> = (props) => //Asi se declara un componente en la vida real
{
    return (
            <div>
            <h1>Hello World, My Name is {props.Name}{props.LastName}</h1>
            </div >
    )  
}

export default HelloWorldComponent;