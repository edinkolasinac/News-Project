/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import { useState } from 'react'
import style from    "./style.module.css";


const { useEffect } = require("react")

function  Home (){
  

    const [page,setPage] = useState(1)
    const [seacrh,setSearch] = useState("")
    const [value,setValue] = useState("")
    


    

        
    const [articles,setArticles] = useState([])
    const key = 
    'd1f2d292b1fa4b45a71063c200791064'



    useEffect(()=>{
        if(seacrh == ''){
            axios
        .get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "us",
            pageSize: 20,
            page:page ,
            apiKey: key,
          },
        }).then((response)=>{
            console.log(response.data.articles);
            setArticles([...articles,...response.data.articles] )
        })
        }
        
    },[page])

    useEffect(()=>{

        axios.get(`https://newsapi.org/v2/everything`,{
            params :{
                q: seacrh,
                apiKey: "d1f2d292b1fa4b45a71063c200791064",
                pageSize : 20,
                page:page
                
            }
            
    }
            
            
         ).then((response)=>{
            console.log(response.data.articles);
            setArticles([...articles,...response.data.articles] )
        })




    },[seacrh,page])


    
    return  <div className={style.containerHome}>
        
        <option></option>
        <input   placeholder='Seacrh some news here'
           className={style.inp} onChange={(el)=>{
            setValue(el.target.value)
        }} />
        <button  className={style.code}  onClick={()=>{
            setSearch(value);
            setArticles([])

        }}>seacrh</button>
    <div className={style.input}>
       (
        {articles.map((el)=>{
            return (

                   
                
                <div className={style.main}>
                   <div className={style.HomeImgDiv}> 
              <img  className={style.HomeImg} onClick={()=>{window.open(el.url)}} src={el.urlToImage} 

              />
              </div>

              <h2>{el.title}</h2>
              <p>{el.author}</p>
              <p>{el.description}</p>
            
              <p>{el.publishedAt}</p>
            
              <button>Read more</button>

            
                </div>

            )        
                 
        
    })}
        
    <div>
        <button className={style.b} onClick={()=>{
            setPage(page + 1)
        }}>load more</button>
    </div>
    <div>

            </div>

    </div>
    </div>



}


export default Home;