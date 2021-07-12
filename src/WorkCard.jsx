import React from 'react';
import './index.css';
function WorkCard (props)
{
    var Cardcss=
    {
        display:"inline-block",
        textAlign:"center",
        backgroundColor:"rgb(28, 29, 29)",
        margin:"2rem ",
        
    }
    var imgCss =
    {
        
        display:"inline-block",
        width:"300px",
        height:"300px",
        margin:"30px",
    }
    var Name =
    {
        fontFamily:"'Orelega One', cursive;",
        
        marginTop:"0px",
        color:"cyan",
    }
    return(
        <>
       
        <div className="CardHover" style={Cardcss}>
        <a href={props.link}>
          <img src={props.imgsrc} style={imgCss}/> </a>
          <div>
              <h2 style={Name}>{props.name}</h2>
          </div> 
    
        </div>
        
        </>
       
    )
}
export default WorkCard;