import Header from "../components/Header"
import Navbar from "../components/NavBar"
import {Outlet} from "react-router-dom";


const Layout = () => {

    return(
        <>

        <Header/>
        <Navbar/>
        <Outlet/>

        </>
        // outlet 만 바뀌는 거라고 보면 된다..

    )
}
export default Layout;