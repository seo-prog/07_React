import { useEffect, useState } from "react"



const CllBackProblem = () => {
    const [number,setNumber] = useState(0);
    const[toggle,setToggle] = useState(false);

    const printNumber = () => {// number 뿐만아니라 toggle 이 변화해도 useEffect 가 작동한다..
        // 즉, 렌더링이 다시 된다는 의미..
        console.log(`current number : ${number}`);
    }

    useEffect(()=> { 
        console.log("printNumber  값 변화 인지!")
    },[printNumber]);

    return(
        <>
        <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>

        <br/>
        <button onClick={() => setToggle(r=>!r)}>{String(toggle)}</button>

        <br/>
        <button onClick={printNumber}>printNumberState</button>



        </>
    )
}

export default CllBackProblem;