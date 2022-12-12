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

      <div style={{ width: "500px", height: "auto", border: "1px solid grey" }}>
         <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ width: "250px", height: "auto", backgroundColor: "rgb(236, 236, 238)" }}>

               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "1rem", marginLeft: "7rem", height: "150px", width: "350px", border: "1px solid black", backgroundColor: "white" }}>


                  <div>
                     <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "28px" }}>{personalDetails.jobTitle}</p>
                  </div>

                  <div style={{ fontSize: "25px" }}>
                     {personalDetails.firstName} {personalDetails.lastName}
                  </div>



               </div>

               <div style={{ marginTop: "2rem" }}>
                  <p style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "3rem", width: "150px", borderBottom: "2px solid black" }}> DETAILS</p>
                  <p style={{ fontWeight: "bold", marginLeft: "3rem", fontSize: "12px" }}>ADDRESS</p>
                  <p style={{ marginLeft: "3rem", lineHeight: "0.4rem" }}>{personalDetails.address}</p>
                  <p style={{ marginLeft: "3rem", lineHeight: "0.4rem" }}>{personalDetails.city} {personalDetails.postalCode}</p>
                  <p style={{ marginLeft: "3rem", lineHeight: "0.4rem" }}>{personalDetails.country}</p>
                  {/* <p>{personalDetails.Idproof}</p> */}


                  <p style={{ fontWeight: "bold", marginLeft: "3rem", fontSize: "12px" }}>PHONE</p>
                  <p style={{ marginLeft: "3rem", lineHeight: "0.1rem" }}>{personalDetails.phone}</p>

                  <p style={{ fontWeight: "bold", marginLeft: "3rem", fontSize: "12px" }}>EMAIL</p>
                  <p style={{ marginLeft: "3rem", fontSize: "13px", lineHeight: "0.1rem" }}>{personalDetails.email}</p>

                  <p style={{ fontWeight: "bold", marginLeft: "3rem", fontSize: "12px" }}>NATIONALITY</p>
                  <p style={{ marginLeft: "3rem", lineHeight: "0.1rem" }}>{personalDetails.nationality}</p>

                  <p style={{ fontWeight: "bold", marginLeft: "3rem", fontSize: "12px" }}>PLACE OF BIRTH</p>
                  <p style={{ marginLeft: "3rem", lineHeight: "0.1rem" }}>{personalDetails.placeOfBirth}</p>

               </div>
               <div>
                  <p style={{ fontWeight: "bold", marginLeft: "3rem", width: "150px", borderBottom: "2px solid black", fontSize: "14px" }}>SKILLS</p>
                  <p style={{ marginLeft: "5rem",fontSize:"12px" }}>{personalDetails.skills}

                  </p>

               </div>


               <div>
                  <p style={{ fontWeight: "bold", marginLeft: "3rem", width: "150px", borderBottom: "2px solid black", fontSize: "14px", marginTop: "3rem" }}>GITHUB LINK</p>
                  <p style={{fontSize:"12px"}}>{linksState.map((e) => {
                     return (
                        <>
                           {/* <p style={{lineHeight:"0.2rem"}}>{e.name}</p> */}
                           <p style={{ textAlign: "center" }}>{e.url}</p>

                        </>
                     )
                  })}</p>
               </div>
               <div>
                  <p style={{fontSize:"12px", fontWeight: "bold", marginLeft: "3rem", width: "150px", borderBottom: "2px solid black", fontSize: "14px", marginTop: "3rem" }}>LANGUAGES</p>
                  <p>{languagesState.map((e) => {
                     return (
                        <>
                           <p style={{ lineHeight: "0.2rem" }}>{e.name}</p>
                           <p style={{ lineHeight: "0.2rem" }}>{e.proficiency}</p>

                        </>
                     )
                  })}</p>
               </div>

               <div>
                  <p style={{ fontWeight: "bold", marginLeft: "3rem", width: "150px", borderBottom: "2px solid black", fontSize: "14px", marginTop: "3rem" }}>REFERENCES</p>
                  <p>{referencesState.map((e) => {
                     return (
                        <>
                           <p style={{ lineHeight: "0.2rem" }}>{e.name}</p>
                           <p style={{ lineHeight: "0.2rem" }}>{e.company}</p>
                           <p style={{ lineHeight: "0.2rem" }}>{e.phone}</p>
                           <p style={{ lineHeight: "0.2rem" }}>{e.email}</p>


                        </>
                     )
                  })}</p>
               </div>

            </div>

            <div style={{ width:"250px"}}>
               <div style={{ marginTop: "12.5rem", height: "auto" }}>
                  <p style={{ fontWeight: "bold",marginLeft:"2rem", width: "210px", borderBottom: "2px solid black", fontSize: "14px" }}>PROFILE</p>
                  <p style={{marginLeft:"2rem",fontSize:"12px", display: "flex", flexWrap: "nowrap" }}>{personalDetails.professionalSummary}</p>
               </div>
               <div style={{ height: "80px" }}>
                  <p style={{ fontWeight: "bold",fontSize:"12px",marginLeft:"2rem", width: "210px", borderBottom: "2px solid black", fontSize: "14px" }}>EMPLOYMENT HISTORY</p>
                  <p style={{marginLeft:"2rem",fontSize:"12px"}}>{employmentState.map((e) => {
                     return (
                        <>
                           <p style={{fontSize:"12px" }}>{e.jobTitle}</p>
                           <p style={{fontSize:"12px" }}>{e.employer}</p>
                           <p style={{fontSize:"12px" }}>{e.start}</p>
                           <p style={{fontSize:"12px" }}>{e.end}</p>
                           <p style={{fontSize:"12px" }}>{e.city}</p>
                           <p style={{fontSize:"12px"}}>{e.decs}</p>

                        </>
                     )
                  })}</p>
               </div>
               <div style={{ height: "80px" }}>
                  <p style={{ fontWeight: "bold",marginLeft:"2rem", width: "210px", borderBottom: "2px solid black", fontSize: "14px", marginTop: "2rem" }}>EDUCATION HISTORY</p>

                  <p style={{marginLeft:"2rem"}}>{educationState.map((e) => {
                     return (
                        <>
                            <p style={{ fontSize:"12px"}}>{e.school}</p>
                           <p style={{ fontSize:"12px"}}>{e.degree}</p>
                           <p style={{ fontSize:"12px"}}>{e.start}</p>
                           <p style={{ fontSize:"12px"}}>{e.end}</p>
                           <p style={{ fontSize:"12px"}}>{e.city}</p>
                           <p style={{ fontSize:"12px"}}>{e.desc}</p>
                        </>
                     )
                  })}</p>

               </div>







               <div style={{ height: "80px" }}>
                  <p style={{ fontWeight: "bold",marginLeft:"2rem", width: "210px", borderBottom: "2px solid black", fontSize: "14px", marginTop: "2rem" }}>INTERNSHIP HISTORY</p>
                  <p style={{marginLeft:"2rem"}}>{internshipState.map((e) => {
                     return (
                        <>
                           <p style={{fontSize:"12px",marginLeft:"2rem" }}>{e.internship}</p>
                           <p style={{fontSize:"12px",marginLeft:"2rem" }}>{e.employer}</p>
                           <p style={{fontSize:"12px",marginLeft:"2rem" }}>{e.start}</p>
                           <p style={{fontSize:"12px",marginLeft:"2rem" }}>{e.end}</p>
                           <p style={{fontSize:"12px",marginLeft:"2rem" }}>{e.city}</p>
                           <p style={{fontSize:"12px",marginLeft:"2rem" }}>{e.desc}</p>
                        </>
                     )
                  })}</p>
               </div>

               <div style={{ height: "auto" }}>
                  <p style={{ fontWeight: "bold",marginLeft:"2rem", width: "210px", borderBottom: "2px solid black", fontSize: "14px", marginTop: "2rem" }}>COURSES</p>

                  <p>{coursesState.map((e) => {
                     return (
                        <>
                           <p style={{fontSize:"12px"}}>{e.school}</p>
                           <p style={{fontSize:"12px" }}>{e.degree}</p>
                           <p style={{fontSize:"12px" }}>{e.start}</p>
                           <p style={{fontSize:"12px" }}>{e.end}</p>

                        </>
                     )
                  })}</p>
               </div>
              



            </div>
         </div>
      </div>

   )
}




