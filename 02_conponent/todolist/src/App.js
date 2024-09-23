import React from 'react';



function App() {

  const {useState} = React;

  const [names, setNames] = useState([
      {id : 1, name:"안녕"},
      {id : 2, name : "안녕2"}
  ]);

  const[inputText, setInputText] = useState("");
  const[inputColor, setInputColor] = useState(""); // 이건 입력받는 색
  const[nextId, setNextId] = useState(3);
  const[check,setCheck] = useState(false);
 
  const[color2, setColor2] = useState("");// 입력받은 색을 담아줄 무언가 ...
  const [backgroundColorr,setbackgroundColorr] = useState("white")

  const onChangeHandler = e => setInputText(e.target.value);
  const onChangeHandler2 = e => setInputColor(e.target.value);


  const onClickHandler = () => {
    const onChangeNames = names.concat({
      id:nextId,
      name:inputText
    });

    setNames(onChangeNames);
    setNextId(nextId+1);
    setInputText("");
  }
  
  const onRemove = id => {
    const ChangeNames = names.filter(name=>name.id !== id );
    setNames(ChangeNames);
  }

  const onclickback = () => setbackgroundColorr("black");

  const changeBox = (e) => {
    const label = e.target.nextElementSibling;  // nextElementSibiling 은 다음 label의 
    label.style.textDecoration = check? "none" : "line-through";
    setCheck(!check);
  };
  
  const nameList = names.map(name => {
    return (
    <div style={{color:color2, backgroundColor:backgroundColorr}} key = {name.id}>
    <input  type='checkBox' onChange={changeBox} />
    <label>{name.name}</label>
    <button onClick = {() => onRemove(name.id)}>삭제</button>
    <br/>
    </div>
  )})

  
  return(
    <>
    <h1>todolist</h1>

    <button onClick = {onclickback} >다크모드</button>
    <br/>

    <ul>

      {nameList}

    </ul>

    <input type = "text" value={inputText} onChange = {onChangeHandler}/>
    <button onClick = {onClickHandler}>추가!</button>

    <input type = "text" value={inputColor} onChange = {onChangeHandler2}/>
    <button onClick = {()=>setColor2(inputColor)}>색 변경!</button> 
    {/* 바로 실행되면 오류가 나므로 매개변수 있는 함수를 호출할 때, 화살표함수를 넣어야 하는것이다 ! */}
    </>
  )
}


export default App;
