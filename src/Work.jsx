import react from 'react';
import reactDom from 'react-dom';
import WorkCard from './WorkCard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

var ns = 
[
   {
       imglink:process.env.PUBLIC_URL + '/logo512.png',
       name:"12 in 1 React",
       link:"https://shivam-shandilya1.github.io/learningReact2/",
      
   } ,
   {
       imglink:process.env.PUBLIC_URL + '/Images/TwoSQ.png',
       name:"OnlyTwo",
       link:"https://shivam-shandilya1.github.io/TwoSqLeft/",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/simon.png',
    name:"Simon Game",
    link:"https://shivam-shandilya1.github.io/SimonGame/"
   },
   {
       imglink:process.env.PUBLIC_URL + '/Images/tableweek.png',
       name:"TableWeek",
       link:"https://shivam-shandilya1.github.io/TableWeek/",
   },
   {
       imglink:process.env.PUBLIC_URL + '/Images/landskytrek.png',
       name:"LandSkyTrek",
       link:"https://shivam-shandilya1.github.io/LandScapeSkyTrek/",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/Newshunt.png',
    name:"NewsHunt",
    link:"https://github.com/Shivam-Shandilya1/Newsletter",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/weather.png',
    name:"Weather Report",
    link:"https://github.com/Shivam-Shandilya1/Weather-Report",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/drum.png',
    name:"DrumKit",
    link:"https://shivam-shandilya1.github.io/Drumkit/",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/dice.png',
    name:"Dicegamz",
    link:"https://shivam-shandilya1.github.io/Dicegamzs/",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/tindog.png',
    name:"TinDog",
    link:"https://shivam-shandilya1.github.io/TinDog-Start/",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/sakura.png',
    name:"Project Sakura",
    link:"https://github.com/ProjectSakura/ProjectSakura.github.io",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/alphavio.png',
    name:"Alphavio",
    link:"https://github.com/ALPHAVIO/WordNook",
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/ISTE.png',
    name:"BVP-ISTE",
    link:"https://github.com/BVP-ISTE/Hacktoberfest2020",
   }

]
const newarr = ns.map((cvalue)=>
{return(
    <WorkCard
 imgsrc={`${cvalue.imglink}`}
 name={`${cvalue.name}`}
 link={`${cvalue.link}`} />
 
)
    
})


const Work=()=>{{
    return(
        <>
        <center>
        <div style={{backgroundColor:"#1c1d1d",marginTop:30+"px",}}>
        <p style={{fontFamily: 'STIX Two Math',serif: 'true',color:'cyan',fontSize:5+'rem',}}>My Projects</p>
        
        <div>
        <form action="./index.js">
           <input type="text" placeholder="Skill Based Project" style={{height: 40+"px",width: 631+"px"}} />
            <button id="filterbtn" type="submit" className="btn btn-outline-* btn-outline-primary" style={{marginLeft: 12+"px",marginBottom: 4+"px",height: 42+"px",width: 103+"px"}}> Search </button>
        </form>
        
        {newarr}
        </div>
        
        </div> 
       </center>

      </>
    )

}}
export default Work;