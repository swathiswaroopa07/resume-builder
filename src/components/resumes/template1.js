import { LocalFireDepartment } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';

// import styles from "../styles/template1.module.scss";

export default function Template1() {
    const personalDetails = useSelector((state) => state.personalDetails.value);
    const employmentState = useSelector(state => state.employment.value);
    const educationState = useSelector(state => state.education.value);
    const internshipState = useSelector(state => state.internship.value);
    const coursesState = useSelector(state => state.courses.value);
    const referencesState = useSelector(state => state.reference.value);
    const extraCurricState = useSelector(state => state.extracurrics.value);
    const languagesState = useSelector(state => state.languages.value);
    const linksState = useSelector(state => state.links.value);


    
    return (
       
        <div style={{width:"680px",height:"auto" ,border:"1px solid grey"}}>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div style={{width:"330px",height:"auto",backgroundColor:"rgb(236, 236, 238)"}}>
          
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem",marginLeft:"7rem",height:"180px",width:"400px",border:"1px solid black",backgroundColor:"white"}}>
              
            <div style={{position:"relative",fontSize:"26px"}}>
            {personalDetails.firstName} {personalDetails.lastName}
            </div>
               <div>
               <p style={{textAlign:"center",fontWeight:"bold",fontSize:"28px",position:"absolute",top:"20%",right:"23%"}}>{personalDetails.jobTitle}</p>
               </div>
           
           
            </div>
            
            <div style={{marginTop:"2rem"}}>
                    <p style={{fontWeight:"bold",fontSize:"16px",marginLeft:"5rem",width:"150px",borderBottom:"2px solid black"}}> DETAILS</p>
                    <p style={{fontWeight:"bold",marginLeft:"5rem",fontSize:"14px"}}>ADDRESS</p>
                    <p style={{marginLeft:"5rem",lineHeight:"0.4rem"}}>{personalDetails.address}</p>
                    <p style={{marginLeft:"5rem",lineHeight:"0.4rem"}}>{personalDetails.city} {personalDetails.postalCode}</p>
                    <p style={{marginLeft:"5rem",lineHeight:"0.4rem"}}>{personalDetails.country}</p>
                    {/* <p>{personalDetails.Idproof}</p> */}

                    
                    <p style={{fontWeight:"bold",marginLeft:"5rem",fontSize:"14px"}}>PHONE</p>
                    <p style={{marginLeft:"5rem",lineHeight:"0.1rem"}}>{personalDetails.phone}</p>

                    <p style={{fontWeight:"bold",marginLeft:"5rem",fontSize:"14px"}}>EMAIL</p>
                    <p style={{marginLeft:"5rem",fontSize:"13px",lineHeight:"0.1rem"}}>{personalDetails.email}</p>

                     <p style={{fontWeight:"bold",marginLeft:"5rem",fontSize:"14px"}}>NATIONALITY</p>
                    <p style={{marginLeft:"5rem",lineHeight:"0.1rem"}}>{personalDetails.nationality}</p>

                    <p style={{fontWeight:"bold",marginLeft:"5rem",fontSize:"14px"}}>PLACE OF BIRTH</p>
                    <p style={{marginLeft:"5rem",lineHeight:"0.1rem"}}>{personalDetails.placeOfBirth}</p>
                   
                </div>
            <div>
            <p style={{fontWeight:"bold",marginLeft:"5rem",width:"150px",borderBottom:"2px solid black",fontSize:"16px"}}>SKILLS</p>
                <p style={{marginLeft:"5rem"}}>{personalDetails.skills}
                
                </p>

            </div>


     <div>
     <p style={{fontWeight:"bold",marginLeft:"5rem",width:"150px",borderBottom:"2px solid black",fontSize:"16px",marginTop:"3rem"}}>GITHUB LINK</p>
     <p>{ linksState.map((e) => {
                return(
                   <>
                    <p style={{lineHeight:"0.2rem"}}>{e.name}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.url}</p>
                    
                   </>
                )
            })}</p>
     </div>


            </div>
          
            <div > 
            <div style={{marginTop:"14rem"}}>
                <p style={{fontWeight:"bold",width:"340px",borderBottom:"2px solid black",fontSize:"16px"}}>PROFILE</p>
            <p>{personalDetails.professionalSummary}</p>
            </div>
             <div>
                <p style={{fontWeight:"bold",width:"340px",borderBottom:"2px solid black",fontSize:"16px"}}>EMPLOYMENT HISTORY</p>
                <p>{employmentState.map((e) => {
                return(
                   <>
                    <p style={{lineHeight:"0.2rem"}}>{e.jobTitle}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.employer}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.start}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.end}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.city}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.decs}</p>
                  
                   </>
                )
            })}</p>
             </div>
          <div>
          <p style={{fontWeight:"bold",width:"340px",borderBottom:"2px solid black",fontSize:"16px",marginTop:"2rem"}}>EDUCATION HISTORY</p>
        
          <p>{educationState.map((e) => {
                return(
                   <>
                    <p style={{lineHeight:"0.2rem"}}>{e.school}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.degree}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.start}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.end}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.city}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.desc}</p>
                   </>
                )
            })}</p>
          
          </div>


          <div>
          <p style={{fontWeight:"bold",width:"340px",borderBottom:"2px solid black",fontSize:"16px",marginTop:"2rem"}}>LANGUAGES</p>
          <p>{languagesState.map((e) => {
                return(
                   <>
                    <p style={{lineHeight:"0.2rem"}}>{e.name}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.proficiency}</p>
                    
                   </>
                )
            })}</p>
          </div>




          <div>
          <p style={{fontWeight:"bold",width:"340px",borderBottom:"2px solid black",fontSize:"16px",marginTop:"2rem"}}>INTERNSHIP HISTORY</p>
          <p>{ internshipState.map((e) => {
                return(
                   <>
                    <p style={{lineHeight:"0.2rem"}}>{e.internship}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.employer}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.start}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.end}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.city}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.desc}</p>
                   </>
                )
            })}</p>
          </div>

          <div>
          <p style={{fontWeight:"bold",width:"340px",borderBottom:"2px solid black",fontSize:"16px",marginTop:"2rem"}}>COURSES</p>
          
          <p>{ coursesState.map((e) => {
                return(
                   <>
                    <p style={{lineHeight:"0.2rem"}}>{e.school}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.degree}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.start}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.end}</p>
                    
                   </>
                )
            })}</p>
          </div>

          <div>
          <p style={{fontWeight:"bold",width:"340px",borderBottom:"2px solid black",fontSize:"16px",marginTop:"2rem"}}>EXTRACURRICULAR ACTIVITIES</p>
          <p>{ extraCurricState.map((e) => {
                return(
                   <>
                    <p style={{lineHeight:"0.2rem"}}>{e.name}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.organisation}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.start}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.end}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.city}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.decs}</p>
                    
                   </>
                )
            })}</p>
          </div>
<div>
          <p style={{fontWeight:"bold",width:"340px",borderBottom:"2px solid black",fontSize:"16px",marginTop:"2rem"}}>REFERENCES</p>
          <p>{ referencesState.map((e) => {
                return(
                   <>
                    <p style={{lineHeight:"0.2rem"}}>{e.name}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.company}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.phone}</p>
                    <p style={{lineHeight:"0.2rem"}}>{e.email}</p>
                    
                    
                   </>
                )
            })}</p>
          </div>



            </div>
            </div>
            </div>

    )
}




