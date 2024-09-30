import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { searchMenu } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";

const MenuSearch = () => {

    const [search] = useSearchParams();
    // 배열 구조 분해 할당이다.
    // useSearchParams는 ? 뒤의 값들 전체를 배열로 바꾸어 반환해준다. 이걸 우리가 만든 변수 search 에 담아준다고 생각 !

    const searchMenuName = search.get("menuName"); // 요청 날릴때의 키값안 menuname 꺼내준거

    const [menuList, setMenuList] = useState([]);

    useEffect(()=> {
        setMenuList(searchMenu(searchMenuName))
    },[])

    return (
        <>
        <h1>검색 결과 ! : </h1>
        <div className="MenuBox">
            {menuList.map(menu=> <MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
        </>
    )






}

export default MenuSearch;