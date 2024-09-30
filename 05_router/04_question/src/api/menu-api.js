

import menus from "..data/Menu-data.json";

// 전체 메뉴 목록 보여주기
export function getMenuList(){
    return menus;
}

// 클릭한거 추가...

export function add(menuId){
    return menus.filter(menu=> menu.menuCode.match(menuCode));
}