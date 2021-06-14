import Contador from "./components/Contador";
import './App.css';
import {createStore} from 'redux'; //IMPORT MÉTODO DO REDUX QUE CRIA O "STORE" PARA O STATE DESEJADO
import contadorReducer from './reducers/contadorReducer'; //IMPORT DO REDUCER QUE VAI TRATAR AS ACTIONS DO STATE CONTADOR
import{Provider} from 'react-redux'; //IMPORT "PROVIDER" QUE POSSIBILITA QUE OS COMPONENTES FILHOS ACESSEM UM STATE DE QUALQUER LOCAL
import Cabeçalho from './components/Cabeçalho';

function App() {

  const store = createStore(contadorReducer);
  
  return (
    <>
    <Provider store={store}>
      <Cabeçalho></Cabeçalho>
      <Contador></Contador>
    </Provider>
    </>
  );
}

export default App;
