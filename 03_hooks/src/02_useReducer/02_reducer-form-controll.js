import { useReducer } from "react";

const reducer = (state,action)=> {
    // state 는 input 의 state 가 들어가는거고, dispatch 뒤에값이 action으로 들어가는거임.. 
    console.log(action);
    return({
        ...state,
        [action.name] : action.value
})}
// action.name이라는건 e.target.name 이 되는것!
// e.target == action 이 되는것이다..

export const Input = () => {
    const[state,dispatch] = useReducer(reducer,{
        pass : '',
        passcheck : '' // 내가 입력받을 값을 state 에 넣어준다고 생각..
    })
    // state 는 pass 와 passcheack 를 가질 수 있는거임..
    // 뒤에 오는 값을 state 에 넣어주고

    const onChangeHandler = e => dispatch(e.target);// dispatch 뒤에 넣어주는 값이 action 에 들어간다..

    return(
        <>
        <label>비밀번호 : </label>
        <input type = "password" name="pass" onChange={onChangeHandler}></input>
        <br/>
        <label>비밀번호 확인 : </label>
        <input type = "password" name="passcheck" onChange={onChangeHandler}></input>

        <div>
            <h3>입력한 비번: {state.pass}</h3>
            <h3>비번 확인 : {state.passcheck}</h3>
        </div>
        </>
    )
}

const ReducerFormControl = () => {
    const [state,dispatch] = useReducer(reducer,{
        name:'',
        nickname:''
    });

    const {name,nickname} = state;
    const onChangeHandler = e => dispatch(e.target);
    
    return(
        <>
        <label>이름 : </label>
        <input type = "text" name="name" onChange={onChangeHandler}></input>
        <br/>
        <label>닉네임 : </label>
        <input type = "text" name="nickname" onChange={onChangeHandler}></input>

        <div>
            <h3>입력한 이름 : {name}</h3>
            <h3>입력한 닉네임 : {nickname}</h3>
        </div>

        </>
    )
}

export default Input;