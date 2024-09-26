/**
 *  context 는 react 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록 고안된 방법이다..
 * 트리 구조가 복잡해질수록 하위 컴포넌트로 props 를 전달하는 양이 많아직호, 그러면 유지보수와 코드 가독성에 악영향을 준다...
 * 
 * 하지만 context 를 사용하면 중간 컴포넌트 들에게 prope 를 넘겨주지 않아도 되고
 * 유지보수도 수월해진다..
 * 단, context 를 사용하면 컴포넌트를 재사용하기 어려워지기 때문에 꼭 필요할때만 써야한다..
 * 따라서 때에 따라서는 context 보다 props 가 더 간단할 수 있다..
 * 
 */

import { createContext, useContext, useState } from "react";
import { Styles } from "./style";

// 컨텍스트 생성 --> 별도의 저장소를 만듦.
const DarkMoodContext = createContext(null);

const Header = () => {
    const context = useContext(DarkMoodContext);

    const{isDark} = context;

    return(
        <header style={{
            ...Styles.header,
            backgroundColor : isDark?"black":"lightblue",
            color:isDark? "white":"black"
        }}>
            <h1>Welcome to useContext</h1>
        </header>
    )}

const ContextContainer = () => {
    const [isDark,setIsDark] = useState(false);
    // Provider 뒤에 오는 속성을 DarkMoodContext 에 담은 후에 
    // 그 하위 요소들은 다 쓸 수 있게 해준다..
    
    return(
        <DarkMoodContext.Provider value={{isDark,setIsDark}}>
            <Page/> 
        </DarkMoodContext.Provider>
    )}

const Content = () => {
    const context = useContext(DarkMoodContext);

    const{isDark} = context;

    return(
        <div style={{
            ...Styles.content,
            backgroundColor:isDark?"green":"white",
            color:isDark?"white":"black"
        }}>
            <p>내용 ~!~!</p>
        </div>
    )}

const Footer = () => {
    const context = useContext(DarkMoodContext);

    const{isDark,setIsDark} = context;
    const toggleHandler = () => setIsDark(!isDark)

    return(
        <footer style={{
            ...Styles.footer,
            backgroundColor:isDark?"black":"white",
            color:isDark?"white":"black"
        }}>
            <button onClick={toggleHandler}>
                {isDark? "black":"white"}
            </button>
            useContext App
        </footer>
    )}
    


const Page= () => {
    return(
        <div style={{
            ...Styles.page
        }}>
            <Header/>
            <Content/>
            <Footer/>
    
        </div>
    )
}
export default ContextContainer;

/**
 *  useContext 의 담점..
 * // 관리는 안함. 관리를 하는건 usestate 이고 usecontext 는 
 * 연결(?)만 해주는것임
 * 
 * 1. 성능 저하:context는  전역 상태를 공유하기 때문에 공유된 상태가 변경되면 그 상태를 구독하는 모든 컴포넌트가
 * 히 렌더링 된다..
 * 만약 context 를 많이 사용하고 그 상태들이 자주 변경되면, 불필요한 리 렌더링이 발생하여 성능이 저하될 수 있다..
 * 
 * 2. 컴포넌트 재사용성 감소 
 * context 에 의존하는 컴포넌트가 많아질수록, 해당 컴포넌트는 그 comtext 환경안에서만 동작할 수 있다..
  이런 컴포넌트는 독립적으로 재사용하기 어려워지며 다른 부분에서 쓰기 어렵다..

  3. 구조적인 복잡성 증가
  context 를 마노이 사용하면 프로젝트 구조가 복잡해진다.. 여러 context 가 중첨되면
  코드의 가독성이 떨어지고 유지보수에 악영향을 끼친다
  많은 컴포넌트가 여러 context 에 의존하면, 프로젝트의 복잡도가 급격히 증가한다..

 */


