import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SideNavBar1 from "./SideNavbar1";


export default function ViewStudents() {
  const [applicantsList, setapplicantsList] = useState([]);
  const [selectJob, setselectJOb] = useState('Interested?');
  const [isModalOpened,setIsModalOpened] = useState(false);
  const [isModalOpened1,setIsModalOpened1] = useState(false);
  const [eachJob, setEachJOb] = useState({});
 const [ID, setId] =useState(1);
  var [clguser, setClgUser] = useState("");

const[showInterest, setShowInterest] = useState({
  jobId:"",
  recruiterUsername: "",
  getInterestedClgs:"",
});

    const {clgName,id} = useParams();

const onInputChange = (e) => {
  setClgUser(e.target.value);
};
  const openModal = ()=>{
      setIsModalOpened(true);
  }
  const closeModal = ()=>{
      setIsModalOpened(false);
  }

  const openModal1 = (getId)=>{
    setShowInterest({
      jobId: getId
    });
    console.log(getId);
    setIsModalOpened1(true);
}
const closeModal1 = ()=>{
    setIsModalOpened1(false);
}

  const viewData = (getId)=>{
    setId(getId);
    openModal();
    
}
  async function getAllapplicants() {
      
      const response = await axios.get(`http://localhost:8080/student/interestedstudents/byInstitiutestudent/${id}/${clgName}`);
      setapplicantsList(response.data);
    //   console.log(institueObj.clgName);
  }
 

 
  

  useEffect(() => {
      getAllapplicants();
  }, []);

  return (
    <div>
      <div>
        <SideNavBar1/>
        <div className="bg-body mt-5 container">
          <h3>All Students</h3>
        </div>
      </div>

      <div className="container mt-5 px-2">
        <div className="mb-2 d-flex justify-content-between align-items-center">
          
        </div>
        <div className="table-responsive">
          
            <table className="table table-responsive table-borderless">
            <thead>
              <tr className="bg-light">
                {/* <th scope="col" width="1%">
                  Id
                </th>
                <th scope="col" width="10%">
                  Student Roll Number
                </th> */}

                <th scope="col" width="10%">
                  Name
                </th>
                <th scope="col" width="10%">
                  Phone
                </th>
                <th scope="col" width="20%">
                  location
                </th>
                <th scope="col" width="10%">
                  email
                </th>
                <th scope="col" width="20%">
                  Academic Details
                </th>
                <th scope="col" width="10%">
                  Project Details
                </th>
                <th scope="col" width="10%">
                  Skills
                </th>
                <th scope="col" width="10%">
                  Extra Activies
                </th>
              </tr>
            </thead>

            {applicantsList.map((applicant) => {
              return(
                <tbody>
              <tr>
{/* 
                <td>{applicant.studentId}</td>
                
                <td>{applicant.studentRollNo}</td> */}
                <td>{applicant.name}</td>
                <td>
                  <span >
                    {applicant.phone}
                  </span>
                </td>
                <td>
                  {applicant.location}
                </td>
                <td>
                  {applicant.email}
                </td>
                <td>
                    <ul>
                      <li>{applicant.qualification}</li>
                      <li>{applicant.specialization}</li>
                      <li>{applicant.institute}</li>
                      <li>{applicant.passingYear}</li>
                      <li>{applicant.obtainedMarks}/{applicant.totalMarks}</li>
                      <li>{applicant.percentage}</li>
                    </ul>
                </td>
                <td>
                    <ul>
                      <li>{applicant.title}</li>
                      <li>{applicant.platform}</li>
                      <li>{applicant.description}</li>
                      
                    </ul>
                </td>
                <td>
                  {applicant.skills}
                </td>
                <td>
                  {applicant.extraActivities}
                </td>
              </tr>
              

            </tbody>
              )
            })}
            
          </table>
          {/* <Modal size="xl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened} onHide={closeModal}>
          <Modal.Body><JobView id={ID}/></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      
        </div>
       
      </div>
    
          
      
    </div>
  );
          }
