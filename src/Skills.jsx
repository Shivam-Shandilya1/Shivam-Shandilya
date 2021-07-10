import react from "react";
import reactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillCard from './SkillCard';

var ns = 
[
   {
       imglink:process.env.PUBLIC_URL + '/Images/OnePunchMan.jfif',
       name:"One Punch Man"
   } ,
   {
       imglink:process.env.PUBLIC_URL + '/Images/Death-Note.jpg',
       name:"Death Note"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/MyHeroAcademia.png',
    name:"My Hero Academia"
   },
   {
       imglink:process.env.PUBLIC_URL + '/Images/Naruto.jpg',
       name:"Naruto"
   },
   {
       imglink:process.env.PUBLIC_URL + '/Images/DemonSlayer.jpg',
       name:"Demon Slayer"
   }

]
const newarr = ns.map((cvalue)=>
{return(
    <SkillCard
 imgsrc={`${cvalue.imglink}`}
 name={`${cvalue.name}`} />

)
    
})
const favSeries="netflix"
const FavS =() =>
{
if(favSeries === "netflix")
{
   console.log(document.getElementById("filterbtn")); 
return(
    <SkillCard 
    imgsrc={ns[0].imglink}
    name={ns[0].name} />
    
)
}else {
    
}
}
const Skills=()=>{{
    
    return(
    <>
    <center>


        <div style={{backgroundColor:"#1c1d1d",}}>
        <p style={{fontFamily: 'STIX Two Math',serif: 'true',color:'#01ff43',fontSize:5+'rem',}}>Skills</p>
        <div className="header">
        
        </div>
        <form action="./index.js">
           <input type="text" placeholder="Skills Needed" style={{height: 40+"px",width: 631+"px"}} />
            <button id="filterbtn" type="submit" className="btn btn-outline-* btn-outline-success" style={{marginLeft: 12+"px",marginBottom: 4+"px",height: 42+"px",width: 103+"px"}}> Search </button>
        </form>
        <FavS/>
        {newarr}
        </div>
        </center>
    </>
    );
}}
export default Skills;