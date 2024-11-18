import App from './App';
import ReactDOM from 'react-dom/client';
import ModalView from './Views/ModalView';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import HookUseRefView from './Views/HookUseRefView';
import HookUseStateView from './Views/HookUseStateView';
import HookUseEffectView from './Views/HookUseEffectView';
import FormularioComponent from './Components/FormularioComponent';
import HookuseContextConsumerView from './Views/HookUseContextConsumerView';
import HookuseContextProviderView from './Views/HookUseContextProvideView';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/hookusestate' element={<HookUseStateView />} />
        <Route path='/hookuseref' element={<HookUseRefView />} />
        <Route path='/formulario' element={<FormularioComponent />} />
        <Route path='/hookuseeffect' element={<HookUseEffectView />} />
        <Route path='/usecontextprovider' element={<HookuseContextProviderView />} />
        <Route path='/usecontextconsumer' element={<HookuseContextConsumerView />} />
        <Route path='/mostrarModal' element={<ModalView/>} />

      </Route>
    </Routes>
  </Router>,
);

reportWebVitals();
