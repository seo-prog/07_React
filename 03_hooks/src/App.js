import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useeffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { App1 } from "./01_useEffect/00_pratice";
import { App2 } from "./01_useEffect/000_practice2";


function App() {
  const [message,setMessage] = useState("안녕하세요~!");

  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <Container/> */}
    
    <App2/>
    </>
  );
}

export default App;
