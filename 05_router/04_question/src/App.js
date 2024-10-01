import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Check from "./pages/Check";
import {useState} from "react";


import MenuDetail from "./pages/MenuDetail";


function App() {

  const[menuGetList, setMenuGetList] = useState([]);
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="main" element={<Main/>}/>
        <Route path="menu">
        <Route index element = {<Menu/>}/>
        <Route path=":menuId" 
        element={<MenuDetail menuGetList = {menuGetList} setMenuGetList= {setMenuGetList}/>}/>
        </Route>
        <Route path="check" element = {<Check menuGetList = {menuGetList} />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
