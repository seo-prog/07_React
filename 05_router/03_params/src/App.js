import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import About from "./pages/About";
import MenuDetail from "./pages/MenuDetails";
import MenuSearch from "./pages/MenuSearch";

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      {/* 기본 /에 index 설정을 안해놨기에 암것도 없는 경우에 아무것도 안뜬다 ! 아까는 기본적으로 main 화면 뜬거 기억나지? */}
      {/* 1-Layout 형식을 따르겠다는 의미로 먼저 layout 을 지정하고 시작 .. 자식요소들로 Outlet 을 계속 바꿔끼겠다는 의미.. */}
      {/* 2-경로가 main 인 경우 Main 을 따라간다고 생각 --> 그 후 page 안에 main 으로 가서 메인 페이지 띄움 */}
      {/* 3-경로가 about 인 경우 About 을 따라간다고 생각 --> 그 후 page 안에 About 으로 가서 About 페이지 띄움 */}
      {/* 4-경로가 /menu/~~ 라면 이 경로를 타겠지? */}
      {/* 5- */}

      <Route path="/" element = {<Layout/>}> 
      <Route path="main" element = {<Main/>}/>
      <Route path="about" element = {<About/>}/>
      <Route path = "menu">
        <Route index element = {<Menu/>}/>
        <Route path=":menuCode" element={<MenuDetail/>}/>
        {/* search 가 아닌 문자나 이외 다른것들은 menuCode 에 다 담길것이다. */}
        {/* 이렇게 특정 변수에(:menuCode) 담아서 보내면 이것을 url 파라미터 라고 하고 이걸 꺼내어서 쓸 때 useparam 을 사용해서 꺼낼 수 있다..  */}
        {/* 우리가 아까 메뉴1 메뉴2 일케 보냈자나. 그 요청에 넘어오는 값을 menuCode 라는 값에 할당한다는 의미 */}
        {/* ex) localhost : 3000/menu/30 -> menuCode = 30 */}

        <Route path="search" element={<MenuSearch/>}/> 
        {/* search 인 경우에만 여기 담긴다고 생가 ! */}

      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
