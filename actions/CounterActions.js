


const incrementAction = (value)=>{
    return{type:'INCREMENT',payload:value||1}
}
const decrementAction = { type: "DECREMENT", payload:1 };

module.exports = {incrementAction,decrementAction};