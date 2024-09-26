import { useCallback, useEffect, useState } from "react"


const CallbackComponent = () => {

    const [size,setSize] = useState(200);
    const [isDark,setIsDark] = useState(false);

    const genSquareStyle = useCallback(() => {
        return {
            backgroundColor : "orangered",
            width : size,
            height : size
        }
    },[size]);

    return(
        
        <div style={{backgroundColor:isDark? "black":"white"}}>
        <input type="range" min="100" max="300"
        onChange={e=>setSize(parseInt(e.target.value))}></input>

        <button onClick={() => setIsDark(!isDark)}>{isDark.toString()}</button>
{/* setIsDark 시에 재할당이 되므로 재 렌더링이 다시 일어났는데 useCallback 이 들어가면 다시 실행 안한다! */}
        <Square genSquareStyle={genSquareStyle}/>
        </div>
        
    )
}

const Square = ({genSquareStyle}) => {
    const [style,setStyle] = useState({});


    useEffect(()=> {
        console.log("style 변경");
        setStyle(genSquareStyle);
    },[genSquareStyle])

    return <div style={style}></div>
}

export default CallbackComponent;