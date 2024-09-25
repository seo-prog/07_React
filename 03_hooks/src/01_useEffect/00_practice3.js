
import { useEffect, useState } from "react";

const File= ({name, setName, email, setEmail})=> {

    useEffect(() => {
        console.log(" 이름 또는 이메일 변경 감지 ~!~!!")
    },[name,email]);

    useEffect(()=> {
        const time = setTimeout(() => {
            setName("홍길동");
           setEmail("hong@example.com");
        },1000)

        return() => clearTimeout(time);
    },[]) // 빈 배열을 넣어줘야 초기 1번만 실행한다는 의미이다 !
    }

export const App3 = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[name2,setName2] = useState("");
    const[email2,setEmail2] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onClickHandler = () => {
        setName2(name);
        setEmail2(email);
        alert("프로필 저장됨~!~!");
    }

    return(
        <>
        <h3>프로필 입력 !!</h3>
        <input type = "text" name = "이름 : " 
            value = {name} onChange={onChangeName}/>
        <br/>
        <input type="text" name = "이메일 : " value = {email}
            onChange={onChangeEmail}/>

        <button onClick = {onClickHandler}>저장~!</button>

        <File name ={name} setName = {setName} setEmail = {setEmail} email = {email}  /> 

        <h2>프로필 미리보기 !! </h2>
            <p>이름 : {name2}</p>
            <p>이메일 : {email2}</p>
            
       
        {/* 이름과 이메일을 넘겨준다! */}
       
        </>
    )
}