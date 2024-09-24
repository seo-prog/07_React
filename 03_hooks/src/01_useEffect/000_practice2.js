import { useEffect, useState } from "react";


const Timer = () => {
    const[number, setNumber] = useState(10);
    // const[isTrue, setIsTrue] = useState("true");

    useEffect(() => {
       
        const interval = setInterval(() => {
            setNumber(value => value-1 )
        },1000);

        if(number === 0){
            alert("시간초과입니다 ㅜㅜ 정답은 2024! ");
            clearInterval(interval)};
        
        return() => clearInterval(interval);
    },[number]);

    return(
        <>
        <p> 남은시간은 !! : {number}초 ! </p>
        </>
    )
}

export const App2 = () => {

    const [correct, setCorrect] = useState(1);

    const onChangeValue = (e) => {
        setCorrect(e.target.value)};
        // 입력한 값이 담김

    const aoo = () => {
        if(correct == 2024){
            alert("정답입니다! 추카")
        }else{
            alert("땡! 틀렸습니다! 정답은 2024 입니다 !")
        }}
    
    return(
        <>
        <h3>문제 !! 올해는 몇 년도 일까요 ?? </h3>

        <input type = "text"
        value ={correct} onChange ={onChangeValue}/>
        <button onClick = {aoo}> 제출~!</button>
        <Timer/>
        </>
    )
}