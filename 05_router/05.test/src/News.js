import { useEffect, useState } from "react";
import "./News.css";



const News = () => {

    const API_KEY = "b2f485cd2f274a5ba62325da31653420";
    const [news, setNews] = useState([]);


    const getnews =()=>{
        return(
        fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`)
        .then(Response => Response.json())
        .then(data => setNews(data.articles))
        )
    }


    useEffect(()=>{
        async function get(){
           await getnews(); 
        }
        get();
    },[])

    return ( 
        <>
         {news.map(news1=>
        <>
        <p> News ! </p>
        <img src = {news1.urlToImage} />
        <h1>{news1.author}</h1>
        <h2>{news1.title}</h2>
        <h3>{news1.description}</h3> 
        </>
        )}
        
       </>
    )
}

export default News;