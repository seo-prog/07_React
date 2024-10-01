import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeStyle = {
        backgroundColor : "lightgreen",
        color : "white"
    }

    return(
        <>
        <ul>
            <li> <NavLink to= {"/main"} 
            style={({isActive})=> isActive? activeStyle:null}>홈 !</NavLink></li>
           <li> <NavLink to= {"/menu"} 
            style={({isActive})=> isActive? activeStyle:null}>메뉴 !</NavLink></li>
            <li> <NavLink to= {"/check"} 
            style={({isActive})=> isActive? activeStyle:null}>메뉴 확인!</NavLink></li>
        </ul>

        </>
    )
}

export default Navbar;