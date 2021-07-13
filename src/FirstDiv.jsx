import react from 'react';
import reactDom from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const FirstDiv=()=>{{
    return(
        <>
        <div style={{display:"inline-block",marginTop:140+"px",}}>
<p style={{fontFamily: 'Anton',sanSerif: 'true',color:'white',fontSize:5+'rem',marginLeft:200+'px',}}>NAMASTE! </p>
<p style={{fontFamily: 'Anton',sanSerif: 'true',color:'white',fontSize:5+'rem',fontWeight:'100',marginLeft:276+'px',}}>I am </p>
<p style={{fontFamily: 'Anton',sanSerif: 'true',color:'red',fontSize:7+'rem',fontWeight:'100'}}>Shivam Shandilya</p>
      </div> 
<div>
    <a href="https://github.com/Shivam-Shandilya1"><i class="fa fa-github icon" style={{color:"white",backgroundColor:"black",fontSize:6+"rem",margin:3+"rem",}}></i></a>
    <a href="https://www.linkedin.com/in/shivam-shandilya-721a07201/"><i class="fa fa-linkedin" style={{color:"white",backgroundColor:"black",fontSize:6+"rem",margin:3+"rem",}}></i></a>
    
</div>

      </>
    )

}}
export default FirstDiv;