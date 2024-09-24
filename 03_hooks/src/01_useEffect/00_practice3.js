
import { useEffect, useState } from "react";

const File= (name, email)=> {
    useEffect(() => {
        const interval = setInterval(()=>
            <>
            <h2>프로필 미리보기 !! </h2>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            
            </>

        )

    },[])

    return() => clearInterval(interval);

}

export const App3 = () => {
    const[name, setName] = useState("홍길동");
    const[email, setEmail] = useState("hong@example.com");

    const onChangeName = () => {
    }

    const onChangeEmail = () => {
    }


    return(
        <>
        <h3>프로필 입력 !!</h3>
        <input type = "text" name = "이름 : " placeholder="이름 입력"
            value = "name" onChange={onChangeName}/>
        <br/>
        <input type="text" name = "이메일 : " value = "email"
            onChange={onChangeEmail}/>

        <button onClick = {onClickHandler}>저장~!</button>

    
        
        <File name = {name} email = {email} /> 
        {/* 이름과 이메일을 넘겨준당! */}
       
        </>
    )
}