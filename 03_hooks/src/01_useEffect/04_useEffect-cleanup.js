

    /*
    useEffect 는 기본적으로 렌더링 직후와 업데이트 직후 호출된다..
    컴포넌트가 마운트 해제되기 직전이나 업데이트 되기 전에 실행할 내용이 있다면 정리 (clean-up) 을 할 수 있다..
    이전 effect 내용을 정리하고 난 뒤 새로운 effect 가 동작하도록 할 때 사용
    이전 effect 가 남아있는 상태에서 새로운 effect 가 발생되면
    마운트 해제가 일어나고 나서도 메모리 누수나 충돌 발생 가능성이 있다..
    */

import { useEffect, useState } from "react"


const Timer = () => {

    useEffect(()=> {
        console.log("타이머가 시작된 ~!")

        const timer = setInterval(() => {
            console.log(new Date().toLocaleTimeString())
        }, (1000)); // 1초마다 현재시간 찍어줌

        return ( // useEffect 의 return 은 항상 언마운트시에 실행이 된다..
            () => { // clearInteval 로 위에 인터벌 끊어줄꺼임
            clearInterval(timer); // 언마운트 시점에 return 이 동작할꺼임..
            console.log("타이머");
        } // 이벤트같은거 걸어뒀던걸 제거한다..
    )

    },[])


    return <h1>타이머를 시작합니다 ~!~!</h1>

}

    export const Container = () => {
        const [isTrue, setIsTrue] = useState(false);

        return(
            <>
            <button onClick={() => {setIsTrue(!isTrue)}}>타이머 토글</button>
            {isTrue && <Timer/>} 
            {/* 언마운트 시점에 useEffect 의 return 으로 간다는 의미이다.. */}
            {/* 참이면 timer 실행할꺼라는 뜻 */}
            </>
        )
    }
   

