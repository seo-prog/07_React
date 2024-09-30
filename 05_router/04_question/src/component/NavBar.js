import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeStyle = {
        backgroundColor : "lightgreen",
        color : "white"
    }

    return(
        <>
        <ul>
            <li NavLink  to = {"/main"}>홈 !</li>
            <li NavLink = {"/menu"}>메뉴 !</li>
            <li NaveLink = {"/cheack"}>주문 확인 !</li>
        </ul>
        </>
    )

}

export default Navbar;