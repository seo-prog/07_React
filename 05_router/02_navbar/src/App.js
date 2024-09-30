import {BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <>
    <BrowserRouter>
    {/* 맨위에 태그를 따로 닫은 이유는 그 맨 위 태그의 자식요소는 모두 Layout 의 형식을 따르겠다는 의미 */}
    {/* index 는 기본설정인거고 및에는 각자 다르게 다는것이다 ! 인덱스는 기본값 ! */}
    {/* Layout 의 자식요소들은 해당 요청이 있을 때 outlet 을 바꿔끼운다고 생각 */}

    {/* 자식 요소니까 /main 에서 / 는 빼준거라고 생각하면 된다.. */}
    
    <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route index element = {<Main/>}/>
      <Route path="main" element = {<Main/>}/>
      <Route path="mypage" element = {<Mypage/>}/>
      <Route path="login" element = {<Login/>}/>
      </Route> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
