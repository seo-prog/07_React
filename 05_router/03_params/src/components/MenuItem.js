import "./MenuItem.css";
import {Link} from "react-router-dom";


const MenuItem = ({menu})=>{

    return(

        //  해당 항목을 클릭하면 이 to 경로로 보낸다는 의미이다.. 
        // `/menu/${menu.menuCode}` 일케 쓰면 요청을 /manu/1 이런식으로 메뉴당 요청을 이렇게 보낸다는 의미이다.
        
        <Link to={`/menu/${menu.menuCode}`}>
        <div className="MenuItem">
            <h3>이름 : {menu.menuName}</h3>
            <h3>가격 : {menu.menuPrice}</h3>
            <h3>종류 : {menu.categoryName}</h3>
        </div>
        </Link> 

    )

}
export default MenuItem;