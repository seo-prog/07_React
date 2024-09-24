import { useEffect, useState } from "react"

const Timer = ({id, onDelete}) => {
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(value => value+1);
        },1000);

        return () => clearInterval(interval);
    },[])

    return(
        <>
        <p>타이머 {id} : {second}초</p>
        <button onClick = {() => onDelete(id)}>삭제</button>
        </> )}

export const App1 = () => {

    const [timer, setTimer] = useState([]);
    const [count, setCount] = useState(1);

    const addTimers = () => {
        if(timer.length<5){
            setTimer([...timer, {id:count}]);
            setCount(count+1); // count 가 1씩 증가 (순서)
    }};

    const deleteTimer = (id) => {
        setTimer(timer.filter((timer)=> timer.id !== id))
    };

    return(<>
        <button onClick = {addTimers}>타이머추가!</button>
        {timer.map((timer)=>{
         return <Timer id = {timer.id} onDelete={deleteTimer}/>
        
    })}</>)};
    
    

    
    
    
    
    
       
       
       