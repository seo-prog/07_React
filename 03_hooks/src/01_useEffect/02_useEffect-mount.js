import { useEffect, useState } from "react"


const UseEffectMount = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => { 
    // 아무것도 안바뀌면 아예 동작하지 않는다! 변화를 인지하고 동작하기에 !
        console.log("마운트 시점 동작 ~!~!"); 
    },[time] ); // 두번째 인자로 빈 배열을 넣으면 업데이트 시점에는 동작하지 않고 최초 마운트에만 동작!
    // time 을 넣으면 이 time 이 바뀔때마다 동작한다는 의미이다 ...
    
    return(
        <>
        <button onClick = {() => setTime(new Date().toLocaleTimeString())}>
            현재 시간 확인 ~~!
        </button>
        <h1>{time}</h1>
        </>
    )
}
export default UseEffectMount; 