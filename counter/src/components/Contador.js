import React from "react";
import { useDispatch, useSelector } from "react-redux"; //IMPORT HOOKS DO REACT PARA LIDAR COM OS O REDUX

function Contador(props) {
    const contador = useSelector((state)=>{return state}); //HOOK PARA ACESSAR O STATE DENTRO DO "STORE" QUE O "PROVIDER" PASSOU PARA ESSE COMPONENTE
    const dispatch = useDispatch(); //HOOK PARA ATIVAR A FUNÇAO DISPATCH, QUE VAI BUSCAR NOS REDUCERS AS ACTIONS PEDIDAS

    return(
        <div className="Contador">
            <div>
                <h3>{contador}</h3>
            </div>
            <div className="ButtonDiv">
                <button onClick={()=>{dispatch({type:'INCREMENT'})}}>+</button> {/*passando para o "dispatch" a caracteristica das actions pedidas */}
                <button onClick={()=>{dispatch({type:'DECREMENT'})}}>-</button> 
            </div>
            
        </div>
    );
}

export default Contador;