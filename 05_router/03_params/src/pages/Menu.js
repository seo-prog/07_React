import {useState, useEffect} from "react";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import menuStyle from "./Menu.css";
import {useNavigate} from "react-router-dom";



const Menu = () => {

    const [menuList, setMenuList] = useState([]); // 우리의 데이터 담을 menuList
    const [searchValue, setSearchValue] = useState(''); // 우리가 검색한 데이터 담을 menuList
    const navigate = useNavigate();


    
    useEffect(()=> {  
        // 메뉴 전체 반환 해주는 Menuapi 안에 getMenuList 를 사용.  
        // 최초시에만 하기 위해서 useEffect 를 쓴다.
        setMenuList(getMenuList());

    },[]) 



    const onClickHandler = () => {
        navigate(`/menu/search?menuName=${searchValue}`); 
        // 검색 뒤에 오는 쿼리스팅 파라미터 ! 키와 벨류로 이루어져있다.ex) -> (menuName = ${searchValue}) 
        // menu 에 search 에다가 요청을 날린다는 의미이다. 그 뒤에는 키와 벨류값 ! 을 가지고 간다. 요청경로는 menu/search 인거고
        // 뒤의 값을 가지고 간다..  이 뒤의 값은 어디서든 가지고 갈 수 있다..
    }
    return(
        <>
        <h1>판매 메뉴 목록 ~~!</h1>
        {/* 일반적인 css 는 기본적으로 전역변수로 처리되다보니까 위에 import 를 할 때 이름을 지정해줘서 .하고 꺼내서 사용하는게 
        오류가 안나게 편리하고 모듈화 한다고 한다. */}

        <div>
            <input type="search" name="menuName"
            onChange={e => {setSearchValue(e.target.value)}}/>
            <button onClick={onClickHandler}>검색 !! </button>
        </div>

        <div className={menuStyle.MenuBox}>
            {menuList.map(menu=><MenuItem key={menu.menuCode} menu ={menu}/>)}
            {/* 전체 메뉴를 담은걸 map 으로 각각의 메뉴당 컴포넌트로 뿌려주는거임 */}
            {/* menuItem 에 props 로 뿌리는거임 */}
        </div>
        </>
    )

}
export default Menu;