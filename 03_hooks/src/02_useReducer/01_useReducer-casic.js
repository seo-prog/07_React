import { useReducer, useState } from "react"

export const Counter = () => {
    const [counter,setCounter] = useState(0);

    // useState 의 set 은 자기자신의 현재 값을 콜백함수의 인자로 받아올 수 있다..
    const plus = () => {
        setCounter(r=> r+1);
    }

    const minus = () => {
        setCounter(r=> r-1);
    }

    return(
        <>
        <h1>counter : {counter}</h1>
        <button onClick = {plus}>+1</button>
        <button onClick = {minus}>-1</button>
        </>
    )
}


const reducer = (state,action) => {
    switch(action.type){
        case 'DECREMENT':
            return {value:state.value-1}
        case 'INCREMENT':
            return {value:state.value+1}
        default:
            return state;
    }
}

const UserReducerBasic = () => {

    const [state,dispatch] = useReducer(reducer,{value:0});
    // 상태를 바꾸기 위한 함수가 reducer 인거고 값이 state 이다..
    // dispatch 는 변화를 줄 함수


    // type 이 action된다...


    return (
        <>
        <h1>const : {state.value}</h1>
        <button onClick = {() => dispatch({type:"DECREMENT"})}>-1</button>
        <button onClick = {() => dispatch({type:"INCREMENT"})}>+1</button>
        </>
    )
};

export default UserReducerBasic;