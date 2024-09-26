import { useEffect, useState } from "react";

const Timmer = () => {
    useEffect = () => {
    const interval = setInterval(()=> {

        <h1> 총{}개의 상품 !</h1>
        
    })
    return () => clearInterval(interval);
}

} 


export const App90 = () => {

    const[name,setName]= useState("");
    const[category,setCategory]=useState("");

    const products = [
        { name: "아이폰 16", category: "전자제품" },
        { name: "맥북 프로", category: "전자제품" },
        { name: "에어팟", category: "전자제품" },
        { name: "삼성 갤럭시", category: "전자제품" },
        { name: "나이키 운동화", category: "의류" },
        { name: "아디다스 티셔츠", category: "의류" },
        { name: "믹서기", category: "가전제품" },
        { name: "전자레인지", category: "가전제품" },
      ];



      const onClickHandler = () => {
         setName(products.name);
         setCategory(products.category);
      }

      const onChangeHandler = category => {
        const Ccategory = category.filter(category !== "전자제품" );
      }

      const onChangeHandler2 = category => {
        const Ccategory = category.filter(category !== "전자제품" );
      }

      const onChangeHandler3 = category => {
        const Ccategory = category.filter(category !== "의류" );
      }

      const onChangeHandler4 = category => {
        const Ccategory = category.filter(category !== "가전제품" );
      }
    
    return(
        <>
        <h1>상품 목록 ! !</h1>
        <button onClick = {onClickHandler} onChange={onChangeHandler}>모든 카테고리 !</button>
        <button onClick = {onClickHandler} onChange={onChangeHandler2}>전자제품 !</button>
        <button onClick = {onClickHandler} onChange={onChangeHandler3}>의류 !</button>
        <button onClick = {onClickHandler} onChange={onChangeHandler4}>가전제품 !</button>

        <Timmer name={name} category={category}/>
        <li></li>
        </>
    )
}