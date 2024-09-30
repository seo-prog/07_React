import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "../../04_question/src/pages/Main";
import Menu from "../../04_question/src/pages/Menu";
import Check from "../../04_question/src/pages/Check";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="check" element={<Check/>}/>

        

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
