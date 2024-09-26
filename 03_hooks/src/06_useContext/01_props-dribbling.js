import { useState } from "react"
import { Styles } from "./style"


const Header = ({isDark}) => {
    return(
        <header style={{...Styles.header,// 객체라 펼쳐줘야함..
            backgroundColor : isDark? "black":"lightgreen",
            color : isDark? "white":"black"
        }}>
            <h1> Welcome to Props ! </h1>

        </header>
    )
    
}
const Content = ({isDark}) => {
    return(
        <div style={{
            ...Styles.content,
            backgroundColor : isDark? "gray":"white",
            color : isDark? "white":"black"
        }}>
            <p>내용입니다 ~!</p>
        </div>
    )


}

const Footer = ({isDark,setIsDark}) => {

    const toggleHandler = () => setIsDark(!isDark);
    return(
        <footer style={{
            ...Styles.footer,
            backgroundColor : isDark? "black" : "lightgreen",
            color : isDark? "white":"black"
        }}>
            <button onClick = {toggleHandler}>
                {isDark? "Light Mood" : "Dark Mood"}</button>
        </footer>
    )

}

const Page = () => {

    const [isDark,setIsDark] = useState(false);

    return(
        <div style={{
            ...Styles.page // styles page 의 내용을 펼친거임..
        }}>

            <Header isDark={isDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/>

        </div>
    )

}
export default Page;