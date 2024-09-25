import { useState } from "react";

const hardCalculator = (num) => {

    for(let i = 0; i<9956999; i++){}

    return num+9956999;
}

const HardCalculator = () => {
    const [hardNumber, setHardNumber] =useState(0);
    const hardSum = hardCalculator(hardNumber);

    return(
        <>
        <h3>어려운계산기</h3>
        <input type="number"
            value = {hardNumber}
            onChange = {e => setHardNumber(parseInt(e.target.value))}></input>
            <span>+9956999 = {hardSum}</span>
        </>
    )

}

export default HardCalculator;