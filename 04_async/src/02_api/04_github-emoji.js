
import {useState} from "react";

const SearchBox = ({setImgUrl})=>{
    const [emojiName,setEmojiName] = useState('');

    const onchangeHandler = (e) => setEmojiName(e.target.value);

    const onClickHandler = () => {

        fetch("https://api.github.com/emojis")
        .then(r=>r.json())
        .then(result => setImgUrl(result[emojiName]));
        // 키값을 꺼내는 두가지 방법
        // 1. .을 찍어서 가지고 온다 
        // 2.[]대괄호로 가지고 온다.- 장점은 문자열만 아니라 특수문자들 까지도 가지고 올 수 있다...

    }

    return (

        <>
        <input type="text" onChange={onchangeHandler}/>
        <button onClick={onClickHandler}>검색</button>
        </>

    )
}


const ImageBox = ({imgurl})=> {
    return !!imgurl? <img src = {imgurl} slt = "이모지"/> : <h1>텅텅</h1>
    // 논리형으로 바꾼다는뜻
}

const EmojiContainer = () => {

    const [imgurl,setImgUrl] = useState('');

    return (
        <>
        <SearchBox setImgUrl={setImgUrl}/>
        <br/>
        <ImageBox imgurl={imgurl}/>
        </>
    )
    
}
export default EmojiContainer;