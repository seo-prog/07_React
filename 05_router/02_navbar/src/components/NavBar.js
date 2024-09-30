import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeStyle = {
        backgroundColor : "lightgreen"
    }

    return(
        <div>
            <ul>
                {/* to 랑 path 랑 같아야한다는 의미이다 ! 링크를 걸어준거다 ! */}
                {/* navLink 에서 / 라는 요청을 날린것 !  */}
                <li><NavLink to={"/"}
                 style={({isActive}) => isActive? activeStyle : undefined}>home</NavLink></li>

               <li><NavLink to={"/main"}
                 style={({isActive}) => isActive? activeStyle : undefined}>main</NavLink></li>

                 <li><NavLink to={"/mypage"}
                 style={({isActive}) => isActive? activeStyle : undefined}>mypage</NavLink></li>

                 <li><NavLink to={"/login"}
                 style={({isActive}) => isActive? activeStyle : undefined}>login</NavLink></li>
                 {/* 현재 반환해주는 경로와 일치할 때 ( 현재 선택되어있는 ) 스타일 실행(?) */}
                 
            </ul>
        </div>
    )

}
export default Navbar;