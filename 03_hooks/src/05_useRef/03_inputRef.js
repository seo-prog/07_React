import { useEffect, useRef, useState } from "react"


const LoginComponent = () => {

    const [form,setForm] = useState({
        username : '',
        password:''
    });

    useEffect(() => {
        console.log(userNameRef.current);
        userNameRef.current.focus();
    },[])

    const userNameRef = useRef();


    const onchangeHandler=(e) => { // 객체라서 하나만 넣어줄 수 없고 두가지 요소 다 넣어줘야 가능하다 !
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }


    const onClickHandler = () => {
        alert(`username: ${form.username} \n password : ${form.password}` );
        setForm({ // 객체로 똑같이 써서 초기화 해줘야 한다...
            username:'',
            password:''
        })
    }

    
    return (
        <>
        <input type="text" name="username" placeholder="이름" onChange={onchangeHandler}
        value = {form.username} ref = {userNameRef}/> 
        {/* 일케 넣어두면 Ref 가 추적이 가능하다.. */}

        <br/>

        <input type="password" name="password" placeholder="비밀번호" onChange={onchangeHandler}
        value = {form.password}/>

        <br/>
        <button onClick = {onClickHandler}>로그인</button>
        </>
    )
}

export default LoginComponent;