import { useEffect, useMemo, useState } from "react"

export const Num = () => {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    const onChangeHandler= () => {
        set

    }

    const numMap = number.map(number=>{
        return(
            <li>{number}</li>
        )
    })

    return(
        <>
        <h2>! 숫자 제곱 계산기 !</h2>
        <input type="text" value={number} onChange={onChangeHandler}/>
        <br/>

        <h1>제곱값 : {numMap}</h1>
        </>
    )
}