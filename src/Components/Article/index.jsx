import React from "react";
import { useContext } from "react";
import { myContext } from "../context";

function Articles (){
   const {sentNews} = useContext(myContext)
   console.log(sentNews,'returned news');
    return (
        <div>

             <div className="container">
            <img src={sentNews.urlToImage}></img>
            <h1>{sentNews.author}</h1>
            <h3>{sentNews.description}</h3>

            </div>
        
            <p>edo</p>
        </div>
    )
}

export default Articles;