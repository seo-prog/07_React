import MenuItem from "../component/MenuItem";


const Check = ({menuGetList}) => {

    return(
        menuGetList.length === 0 ? <p>선택한 커피가 없습니다.~!</p>:
        <ul>
            {menuGetList.map(menu=> <MenuItem key={menu.id} menu={menu}/>)}
        </ul>
    )
}
export default Check;