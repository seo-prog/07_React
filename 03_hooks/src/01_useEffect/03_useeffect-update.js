import { useEffect, useState } from "react"


const UseEffectUpdate = () => {

    const [user,setUser] = useState({username:'', password:''});
    
    const onChangeHandler = e => {
        setUser({
            ...user, // 기존의 user 객체를 그대로 복사한다고 보면 된다..
            [e.target.name] : e.target.value // 위에 가져와서 그 인풋의 타겟의 네임을 가지고 온다..
            // name="username" or name="password"
        })
    }

    useEffect(() => {
        console.log("username : 변경 감지 ~!");
    }, [user.username]);

    useEffect(() => {
        console.log("password : 변경 감지 ~!");
    }, [user.password]);

    return (
        <>
        <label>userName : </label>
        <input type="text" name="username" onChange={onChangeHandler}></input>
        <br/>
        <label>password : </label>
        <input type="password" name="password" onChange={onChangeHandler}></input>
        <h3>username : {user.username}</h3>
        <h3>psasword : {user.password}</h3>
        </>
    )

}
export default UseEffectUpdate;