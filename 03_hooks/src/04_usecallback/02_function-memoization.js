/*
useMemo : 특정 값을 메모이제이션 한다..
주로 연산이 비싼 값이나 복잡한 계산.. 사용 목적은 값이 자주 계산되는 것을 방지하여 성능 최적화

useCallback : 특정 함수를 메모이제이션 한다.. 힘수의 재생성을 방지..
자식 컴포넌트에 함수를 전달할 때 불필요하게 함수가 재생성 되는 것을 방지..

useCallback 을 많은 함수에 남용하면 오히ㅏ려 성능이 저하된다..
메모이제이션 자체도 메모리 비용 듬
함수의 재생성에 큰 비용이 없는 경우 굳이 사용할 필요는 없다..
*/
import { useCallback, useEffect, useState } from "react"

 

const FunctionMemoization =() => {

    const [number,setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const noneCallback = () => {
        console.log(number);
    }

    const printNumber = useCallback(()=> {
        console.log(`current number : ` + number);
    },[number]); // number 가 변할때만 printNumber 가 렌더링 ~!

    useEffect(()=> {
        console.log("printNumber 값 변화 인지됨~!")
    },[printNumber])

    return(
        <>
        <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>

        <br/>
        <button onClick={() => setToggle(r=>!r)}>{String(toggle)}</button>

        <br/>
        <button onClick={printNumber}>printNumberState</button>
        <button onClick={noneCallback}>noneCallback</button>



        </>
    )

}
export default FunctionMemoization;

