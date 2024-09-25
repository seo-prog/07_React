
// import { useEffect, useState } from "react";


// const Numb = ({numbers,setNumbers}) => {
//    useEffect(() => {
//     const squareNumbers = (()=> {

//         console.log("제곱값 계산 실행");
//         return numbers.split(",").map(num => {
//             return isNaN(num)? 0:num**2;
//         })
//     }, [numbers]);

//     <>

//     <h1>제곱값 : </h1>
//     <li>{numbers.map}</li>
//     </>

//    })
// }


// const SquareCalculator = () => {
//     const [numbers,setNumbers] = useState("");



//     const onChangeHandler= (e) => {
//         setNumbers(e.target.value);
//     }



//     return(
//     <>
//         <h2>! 숫자 제곱 계산기 !</h2>
//         <input type="text" value={numbers} onChange={onChangeHandler}/>
//         <br/>

//         <Numb numbers = {numbers} setNumbers={}/>
//         </>
//     )
// }

// export default SquareCalculator;

