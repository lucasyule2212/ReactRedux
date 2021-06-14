const redux = require("redux"); //IMPORT REDUX
const thunk = require("redux-thunk").default; //IMPORT REDUX THUNK
const fetch = require("node-fetch"); //IMPORT NODE FETCH PARA USAR COMO EXEMPLO NO REDUX-THUNK

const applyMiddleware = redux.applyMiddleware; //METODO REDUX PARA PERMITIR O USO DO REDUX-THUNK NO GERENCIAMENTO DE ESTADO
const createStore = redux.createStore; //METODO REDUX PARA CRIAR UM GERENCIADOR DE ESTADO
const combineReducers = redux.combineReducers; //METODO REDUX QUE PERMITE AGRUPAR OS REDUCERS DE TODOS OS ESTADOS GERENCIADOS

//IMPORTS DOS REDUCERS E ACTIONS:
const {
  incrementAction,
  decrementAction,
} = require("./actions/CounterActions");
const { addItemAction } = require("./actions/ListActions");
const { counterReducer } = require("./reducers/CounterReducer");
const { listReducer } = require("./reducers/ListReducer");
//----------------------------------------------------------------

//UTILIZAÇAO DO REDUX-THUNK, PERMITE GERENCIAR DADOS DE FORMA ASSÍNCRONA(REQUISIÇOES WEB)
const loadItemAndAdd = () => {
  return dispatch(
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((json) => {
        //TRANSFORMANDO O RESPONSE DO FETCH EM JSON
        dispatch(addItemAction(json)); //ENCAMINHANDO O JSON DO FETCH PARA O ACTION "ADD"
      })
  );
};
store.dispatch(loadItemAndAdd()); //UTILIZANDO A FUNÇAO CRIADA GRAÇAS AO REDUX-THUNK COMO UM ITEM A SER ADICIONADO PELO ACTION

//------------------------------------------------------------------

const allReducers = combineReducers({
  //AGRUPANDO OS REDUCERS DE UM ESTADO
  counter: counterReducer,
  list: listReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk)); //DIZENDO AO GERENCIADOR DO ESTADO QUE PODE SER UTILIZADO UM MIDDLEWARE FUNCTION EM UM DISPATCH

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addItemAction({ name: "lucas", id: 0 }));

store.dispatch(incrementAction(1));
store.dispatch(incrementAction(2));
store.dispatch(incrementAction(3));
store.dispatch(incrementAction());
store.dispatch(decrementAction);

store.dispatch(addItemAction({ name: "denya", id: 69 }));
