import { useEffect, useState } from "react"

// const Pro = ({titlelist}) =>{ 
//     useEffect(() => {
        
//     })


// }



const Gesipan = () => {

    const[title, setTitle] = useState("");
    const[contents,setContents]

    const[input,setInput] = useState([
        {title:"", content : ""}
    ])

    // const[input, setInput] = useState("");


    const onChangeHandler= (e) => {
        setInput([
            ...input,
           {[e.target.name] : e.target.value}
        ])
    }

    const onClickHandler= () => {
        alert(`제목 ${tex.title} 이 게시되었습니다 ! `);



        setTex([
            {title:'',
            content:''}
        ])
    }

    const titleList = input.map(name=>{
        return(
            <label>{name.title} {name.content}</label>
        )
    })

    // const onChangeHandler2 = () => {

    // }

    // const titleList = tex.map(() =>{
    //     return(
    //         <ul>
    //             <li>
    //             {tex.title},
    //             {tex.content}
    //             </li>
    //         </ul>
            
    //     )
    // })

    return(
        <>
        <h1>! 게시판 !</h1>
        <input type="text" name="title" placeholder="제목" onChange={onChangeHandler}
        value={tex.title}/>
        <br/>

        <input type="text" name="content" placeholder="내용" onChange={onChangeHandler}
        value={tex.content}/>
        <br/>

        <button onClick={onClickHandler}>게시하기 !</button>
        {/* <input type="text" name="input" placeholder="검색" onChange={onChangeHandler2}
        value={input}/> */}
        <li>{titleList}</li>
        {/* <Pro titlelist = {titleList}/> */}
       

    
        </>
    )
}
export default Gesipan;