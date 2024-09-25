import { useState } from "react";

const hardCalculator = (num) => { //easy를 바꿔도 hard 땜시 렌더링이 늦어진다..
    console.log("어려운 계산기 ~!");

    for(let i = 0; i<199999999; i++){}
    return num + 1000;
}

const easyCalculator = (num) => {
    console.log("쉬운 계산기 ~!");
    return num +1;
}


export const ComplexCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, seteasyNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);
    const easySum = easyCalculator(easyNumber);

    return(
        <>

        <h1>어려운 계산기 ~!</h1>
        <input type = "number"
        value={hardNumber}
        onChange={e => setHardNumber(e.target.value)}></input>
        <span>+10000 = {hardSum}</span>

        <h1>쉬운 계산기 ~!</h1>
        <input type = "number"
        value={easyNumber}
        onChange={e => seteasyNumber(e.target.value)}></input>
        <span>+10000 = {easySum}</span>
        </>
    )

}

