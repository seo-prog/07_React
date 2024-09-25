import { useReducer } from "react";

const reducer = (state,action)=> {

        switch(action.type){
            case 'DE':
                return { ...state,value:state.value-1}
            case 'IN':
                return {...state,value:state.value+1}
            case "text":
                return ({
                    ...state, // state 에 들어있는 값들을 펼친거다..
                    [action.name]:action.value
                })

            default : return state;
        }}


export const All = () =>{

    const[state,dispatch] = useReducer(reducer,{
        value:0,
        check:''
    });

    const onChangeHandler = e => dispatch(e.target);
    return(
        <>
        <h1>Counter : {state.value}</h1>
        <button onClick = {() => dispatch({type:"DE"})}>-1</button>
        <button onClick = {() => dispatch({type:"IN"})}>+1</button>
        
        <input type="text" name ="check" onChange={onChangeHandler}></input>

        <div>
            <h3>입력한 텍스트  : {state.check} </h3>
        </div>
        </>
    )
}