import { useState } from "react"

const useInput = () => {
    const[value,setValue] = useState("");

    const onChange = e => setValue(e.target.value);
    return {value,onChange};
    
}

const CustomKooks = () => {
    const name = useInput();
    const pass = useInput();
    const email = useInput();

    return(
        <>
        <label>이름 : </label>
        <input type="text" value={name.value} onChange={name.onChange}></input>
        <br/>

        <label>비밀번호 : </label>
        <input type="password" {...pass}/> 
        {/* 속성과 키가 똑같을 때에는 일케 쓸 수 있다.. */}
        <br/>
        <label>이메일:</label>
        <input type="email" {...email}/>

        <h4>{name.name}</h4>
        <h4>{pass.password}</h4>
        <h4>{email.email}</h4>


        </>
    )

}
export default CustomKooks;