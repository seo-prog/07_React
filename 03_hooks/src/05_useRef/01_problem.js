import { useState } from "react"
// 사용자에게 보여줄때는 렌더링을 계속 다시 해줘야 하는게 맞지만
// 우리만 알면 되는 상황이면? 값은 변하되 렌더링은 안되게 해줄 수 있는게 ref!


const CounterRef= () => {
    const[counter,setCounter] = useState(0);

    console.log("counter 렌더링 됨 ~!")

    const increseCount = () => {
        setCounter(counter + 1);
    }

    return (
        <>
        <h1>Counter : {counter}</h1>
        <button onClick={increseCount}>카운트 증가 !</button> 
        {/* usestate 값이 바뀌니까 버튼 누를 때마다 렌더링이 다시 일어나는거 보라는 거임. */}
        </>
    )
}