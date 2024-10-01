import {Link} from "react-router-dom";
const MenuItem = ({menu}) => {

    return(
        <>
        <Link to={`/menu/${menu.id}`}>
       
        <li>
        {menu.name}-가격 :{menu.price}
        </li>
        
        </Link>
        </>
    )

}
export default MenuItem; 