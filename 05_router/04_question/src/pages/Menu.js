
import {useState, useEffect} from "react";
import { getMenuList } from "../api/menu-api";
import MenuItem from "../component/MenuItem";
import {useNavigate} from "react-router-dom";


const Menu = () => {
    const nevigate = useNavigate();
    const[menuList, setMenuList] = useState([]);
    
    useEffect(()=> { // 우리 카페의 전체 메뉴 목록 보여주기
        setMenuList(getMenuList());
    }) // 얘는 그냥 우리 데이터에 있는 메뉴 리스트들을 우리가 만든 배열에 객체배열로 set 을 이용하여 넣어주는 역할이다.
    

    const onClickHandler= ()=> {
        return (
            nevigate(`/check`)

        )
    }

    return (
        <>
        <h2>판매 메뉴 목록 !</h2>
        {/* 컴포넌트를 나누어 우리가 보여줄 메뉴 리스트는 따로 관리하고 연결만 해주어 보여주도록 한다.  */}

        <ul>
            {menuList.map(menu=> <MenuItem key={menu.id} menu={menu}/>)}
        </ul>
        <button onClick={onClickHandler}>주문하기</button>
        </>
    )
}
export default Menu;
