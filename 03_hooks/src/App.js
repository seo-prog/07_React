import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useeffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { App1 } from "./01_useEffect/00_pratice";
import { App2 } from "./01_useEffect/00_practice2";
import { App3 } from "./01_useEffect/00_practice3";
import UserReducerBasic from "./02_useReducer/01_useReducer-casic";
import ReducerFormControl, { Input } from "./02_useReducer/02_reducer-form-controll";
import { All } from "./02_useReducer/00_practice";
import HardCalculator from "./03_useMemo/01_hard-calculator";
import { ComplexCalculator } from "./03_useMemo/02_conplex-calculator";
import { UseMemoComponent } from "./03_useMemo/03_performance-useMemo";
import { LocationComponent } from "./03_useMemo/04_object-type-problem";
import SquareCalculator from "./03_useMemo/05_question";
import { App90 } from "./03_useMemo/06_que2";


function App() {
  const [message,setMessage] = useState("안녕하세요~!");

  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <Container/> */}
    
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <UserReducerBasic/> */}
    {/* <ReducerFormControl/> */}
    {/* <Input/> */}
    {/* <All/> */}
    {/* <HardCalculator/> */}
    {/* <ComplexCalculator/> */}
    {/* <UseMemoComponent/> */}
    {/* <LocationComponent/> */}
    {/* <SquareCalculator/> */}
    <App90/>
    </>
  );
}

export default App;
