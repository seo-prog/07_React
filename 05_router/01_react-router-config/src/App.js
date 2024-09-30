import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Menu from "./pages/Manu";
import Main from "./pages/Main";


function App() {

  /**
   *  npm install react-router-dom
   * 
   * 라우팅 : 어떤 요청을 어디로 안내 및 매핑을 할 것인지 정내놓고 진행하는 것으로 
   * 리핵트에서는 요청에 따라 요청 된 컴포넌트를 렌더링한다..
   * 
   * BouwserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
   * Routes : Route 를 묶어주는 컴포넌트
   * Route : url 요청 주소와 컴포넌트를 매핑해주는 단위...
   * 
   */

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Main/>}/> 
    {/* path 는 요청경로! 그냥 / 만 넣으면 기본값이라는 의미 ! 구글만 쳤을 때의 느낌 --- 기본요청 */}
    <Route path="/about" element = {<About/>}/>
    <Route path="/menu" element = {<Menu/>}/>

   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
