import { useState } from "react";


const SearchBox = () => {

    const API_KEY = 'live_I3nzKnTpNjzyXLZp0RtbUU1mRjTwK7uAEECexmUv6u3djBsNDYSaX4Isn5PDyZo9';
    const[cats, setCats] = useState([]);

    const onClickHandler = () => {
        return(
            fatch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`)
            .then(response=> response.json())
            .then(data=> setCats(data))
        )}

    const onChangeHandler=()=> {

    }

    return(
        <>
        <input type="text" onChange = {onChangeHandler}/>
        <button onClick={onClickHandler}> 검색하기 </button>
        </>
    )

}

const ImageBox = ({imgurl})

const CatsContainer = () => {
    
    const[imgurl, setImgUrl] = useState('');

    return(
        <>
        <SearchBox />
        </>
    )
}

export default CatsContainer;