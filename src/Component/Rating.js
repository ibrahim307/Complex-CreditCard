import React from 'react'
function Rating({Rate,searchRate}){
    let stars=[]

    for(let i=0;i<5;i++){
            if(Rate>i){
                stars.push(<span onClick={()=>searchRate(i+1)}>★</span>)
            }
            else 
                stars.push(<span  onClick={()=>searchRate(i+1)}>☆</span>)     
    }
    return(
        <div>{stars}</div>
    )
}
export default Rating