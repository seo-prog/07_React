// 데이터를 처리하는 로직을 별도의 파일로 분리하여 api 처럼 사용하기 위함..

import menus from "../data/Menu-detail.json";
// 저 json 데이터를 menus 라는 이름으로 담아와서 더 구분하기 쉽게 사용하도록 이름일 정해준거라 생각하면 된다.


// 저 파일을 menus 라는 이름의 변수를 만들어 할당한거라 보면 댐


// 1. 메뉴 전체 반환
export function getMenuList(){
    return menus;// json 전체 메뉴를 반환해준다.
}



// 검색 함수
export function searchMenu(menuName){

    return menus.filter(menu=> menu.menuName.match(menuName));
}




// 디테일 페이지 함수
export function getMenuDetail(menuCode){
    
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
    // 뒤에 [0] 을 넣어주면 맨 위에 있는 정보만 딱 하나 반환한다는 뜻 ! 0번째 인덱스 !
}



