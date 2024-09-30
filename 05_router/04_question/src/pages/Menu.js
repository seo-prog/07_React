
import {useState, useEffect} from "react";
import { getMenuList } from "../api/menu-api";


const Menu = () => {
    const[menuList, setMenuList] = useState([]);
    const[searchValue, setSearchValue] = useState('');
    
    useEffect(()=> {
        setMenuList(getMenuList());
    })


    return (
        <>

        </>
    )
}