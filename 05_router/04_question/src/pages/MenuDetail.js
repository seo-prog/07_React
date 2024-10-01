import {useNavigate, useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import { getMenuDetail } from "../api/menu-api";


const MenuDetail = ({menuGetList, setMenuGetList}) => {

    const{menuId} = useParams();
    const nevigate = useNavigate();


    const [menu, setMenu] = useState({
        name : '',
        price : '',
        description : ''
    });

    useEffect(()=> {
        console.log(menuId);
        setMenu(getMenuDetail(menuId));
    },[])


    function onClickHandler(){
        setMenuGetList([
            ...menuGetList,
            menu
         ]) 
         nevigate(`/menu`);
         // 쌓이게 하려고 통으로 넣어야된대.... 왜지.....
    }

console.log(menuGetList)
    const onClickHandler2= () => {
        nevigate(`/menu`);
    }

    return(
        <>
        <h2>{menu.name}</h2>
        <h3>메뉴 가격 : {menu.price}</h3>
        <h3>메뉴 설명 : {menu.description}</h3>
        <button onClick={onClickHandler}>장바구니 담기 !</button>
        <button onClick={onClickHandler2}>돌아가기</button>
        </>
    )
}

export default MenuDetail;