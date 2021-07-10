import React from 'react';
import './index.css';
function SkillCard (props)
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
        width:"75px",
        height:"75px",
        margin:"30px",
    }
    var Name =
    {
        fontFamily:"'Orelega One', cursive;",
        fontSize:"2.5rem",
        marginTop:"0px",
        color:"#01ff43",
    }
    return(
        <>
       
        <div className="CardHover" style={Cardcss}>
        
          <img src={props.imgsrc} style={imgCss}/> 
          <div>
              <h2 style={Name}>{props.name}</h2>
          </div> 
    
        </div>
        
        </>
       
    )
}
export default SkillCard;