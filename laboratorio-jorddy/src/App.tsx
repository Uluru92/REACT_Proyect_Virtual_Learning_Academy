
import MenuComponent from './Components/MenuComponent';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <div>
      <MenuComponent></MenuComponent>
      <Outlet/>  
    </div> 
  );

}

export default App;

//outlet unicamente se usa en .App viene siendo el analogo de <router-view>
