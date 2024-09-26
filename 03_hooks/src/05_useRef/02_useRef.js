

/**
 *  useRef 를 사용하는 목적?
 * 
 * 1. 값 유지 - 렌더링 사이에 값을 유지할 수 있게 해줌. 리렌더링 시 초기화 되지 않는다..
 * 2. 렌더링 방지 -  값이 변경 되더라도 리렌더링을 일으키지 않는다.. 성능 최적화
 * 2. 애니메이션, 타이머 등 특정 값이 변경 되더라도 리렌더링을 원치 않을 때 저장 용도
 * 4. dom 요소에 직접 접근하는 방법 제공.. 특정 요소 포커스 등
 * 
 */

import { useRef, useState } from "react";

const UseRefCounter = () => {
    
    console.log("useRefCounter 렌더링 됨..");

    const [count,setCount] = useState(0);

    let variable = 0; // 일반변수

    const countRef = useRef(0);

    const increseCount = () => {
        setCount(count+1);
    }

    const increseVriable = () => {
        variable +=1;
        console.log("variavle :" + variable);
    }

    // 일반 변수는 렌더링이 되면 초기화가 되고 Ref와 일반변수는 렌더링 없이 콘솔에만 찍히다가 
    // (useState 변수로 )다시 렌더링을 하게 되었을 때 일반변수는 0으로 초기화 된 후 다시 0부터 더해주는데
    // Ref 는 값을 기억하고 있다가 렌더링 되면 그 숫자를 즉시 렌더링 하게 된다...
    //  따라서 Ref 는 값이 증가하지만 렌더링만 안되있는 상태이므로 렌더링을 하면 현재 값을 렌더링 해준다..
    
    const increseCountRef = () => {
        countRef.current = countRef.current+1;
        console.log("카운트Ref : " + countRef.current);
    }

    return (
        <>
        <h1>counter : {count}</h1>
        <h1>variable : {variable}</h1>
        <h1>countRef : {countRef.current}</h1>

        <button onClick = {increseCount}>카운트 증가!</button>
        <button onClick = {increseVriable}>variavle 증가!</button>
        <button onClick = {increseCountRef}>카운트 Ref 증가 !</button>
        </>
    )
}

export default UseRefCounter;

