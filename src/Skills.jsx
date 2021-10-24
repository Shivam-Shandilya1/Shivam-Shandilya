import react,{useState} from "react";
import reactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillCard from './SkillCard';

var ns = 
[
   {
       imglink:process.env.PUBLIC_URL + '/Images/html.png',
       name:"HTML"
   } ,
   {
       imglink:process.env.PUBLIC_URL + '/Images/CSS.png',
       name:"CSS"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/js.png',
    name:"JavaScript"
   },
   {
       imglink:process.env.PUBLIC_URL + '/Images/jQuery.png',
       name:"jQuery"
   },
   {
       imglink:process.env.PUBLIC_URL + '/logo512.png',
       name:"Reactjs"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/Node.png',
    name:"Nodejs"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/express.png',
    name:"Expressjs"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/SQL.png',
    name:"SQL"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/mongodb.png',
    name:"MongoDB"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/mongoose.png',
    name:"Mongosoe"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/api.png',
    name:"API"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/ejs.png',
    name:"EJS"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/c.png',
    name:"C"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/Cp.png',
    name:"C++"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/autocad.png',
    name:"AutoCAD"
   },

]


const Skills=()=>{{
    const [list,setList]=useState(
        [{
            imglink:process.env.PUBLIC_URL + '/Images/html.png',
            name:"HTML"
        } ,
        {
            imglink:process.env.PUBLIC_URL + '/Images/CSS.png',
            name:"CSS"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/js.png',
         name:"JavaScript"
        },
        {
            imglink:process.env.PUBLIC_URL + '/Images/jQuery.png',
            name:"jQuery"
        },
        {
            imglink:process.env.PUBLIC_URL + '/logo512.png',
            name:"Reactjs"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/Node.png',
         name:"Nodejs"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/express.png',
         name:"Expressjs"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/SQL.png',
         name:"SQL"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/mongodb.png',
         name:"MongoDB"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/mongoose.png',
         name:"Mongoose"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/api.png',
         name:"API"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/ejs.png',
         name:"EJS"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/c.png',
         name:"C"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/Cp.png',
         name:"C++"
        },
        {
         imglink:process.env.PUBLIC_URL + '/Images/autocad.png',
         name:"AutoCAD"
        }]
    );
    const [sk,setSk]=useState(); 
    const filterSkills=(event)=>{{
        
        setSk(event.target.value);
    }}
    const Filter=(event)=>{{
        event.preventDefault();
        console.log(event.target[0].value);
       setList(()=>
       {
        ns.map((cvalue)=>
        {
            if(cvalue.name==event.target[0].value)
            return(
            <SkillCard
         imgsrc={`${cvalue.imglink}`}
         name={`${cvalue.name}`} />
        )
            
        })
       })
       
    }}
    return(
    <>
    <center>


        <div style={{backgroundColor:"#1c1d1d",}}>
        <p style={{fontFamily: 'STIX Two Math',serif: 'true',color:'#01ff43',fontSize:5+'rem',}}>Skills</p>
        <form action="./index.js" onSubmit={Filter} value={sk}>
           <input type="text" placeholder="Skills Needed" style={{height: 40+"px",width: 631+"px"}} onChange={filterSkills} value={sk}/>
            <button id="filterbtn" type="submit" className="btn btn-outline-* btn-outline-success" style={{marginLeft: 12+"px",marginBottom: 4+"px",height: 42+"px",width: 103+"px"}} > Search </button>
        </form>
        {
            list
        }
        </div>
        </center>
    </>
    );
}}
export default Skills;