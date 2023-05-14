import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import JobView from "./JobView";
import SideNavBar from "./SideNavbar";

export default function JobDisplay() {
  const [applicantsList, setapplicantsList] = useState([]);
  const [selectJob, setselectJOb] = useState('Applied');
  const [isModalOpened,setIsModalOpened] = useState(false);
  const [isModalOpened1,setIsModalOpened1] = useState(false);
  const [eachJob, setEachJOb] = useState({});
 const [ID, setId] =useState(1);
  var [clguser, setClgUser] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (institute == null) {
        navigate("/");
    }
}, []);

  const institute = JSON.parse(localStorage.getItem("institute"));

const[showInterest, setShowInterest] = useState({
  jobId:"",
  recruiterUsername: "",
  getInterestedClgs:"",
});

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
      const response = await axios.get(`http://localhost:8080/recruiter/job`);
      setapplicantsList(response.data);
  }

  async function addCollege(currentJobId) {
    
    //console.log(showInterest);
    console.log(clguser);
    try{
      
      
      showInterest.getInterestedClgs = clguser;
      
      showInterest.recruiterUsername = document.getElementById("recruiteruser").value;
      console.log(showInterest);
      const data = {
        jobId : currentJobId,
        instituteId : institute.instituteId,
        status:"Applied"

      }
      const response1 = await axios.post("http://localhost:8080/institute/interestedclgs", data);
      console.log(response1);
      console.log(response1.data);
      if(response1.status == 200 && response1.data == "AlreadyExits"){
        // currentJobId.target.value.getElementById("jobInt").innerHTML = "Applied Already";
        // setselectJOb("Applied Already");
        // alert("Applied Already");
        setselectJOb("Applied Already");
        openModal1();
      }
      else if(response1.status == 200){
        setselectJOb("Applied");
        openModal1();
        
      }
    }
    catch{
      document.getElementById("clguser").innerHTML = "Invalid UserName";
    }
   
    
    
}
 
  

  useEffect(() => {
      getAllapplicants();
  }, []);

  return (
    <div>
      <div>
        <SideNavBar />
        <div className="bg-body mt-5 container">
          <h3>Posted jobs</h3>
        </div>
      </div>

      <div className="container mt-5 px-2">
        <div className="mb-2 d-flex justify-content-between align-items-center">
          
        </div>
        <div className="table-responsive">
          
            <table className="table table-responsive table-borderless">
            <thead>
              <tr className="bg-light">
                <th scope="col" width="1%">
                  Sr
                </th>
                <th scope="col" width="10%">
                  Job Title
                </th>

                <th scope="col" width="15%">
                  Company Name
                </th>
                <th scope="col" width="20%">
                  Job Description
                </th>
                <th scope="col" width="20%">
                  Requirements
                </th>
                <th scope="col" width="10%">
                  View
                </th>
                <th scope="col" className="text-end" width="10%">
                  <span>Interested</span>
                </th>
              </tr>
            </thead>

            {applicantsList.map((applicant) => {
              return(
                <tbody>
              <tr>
                <input hidden value={applicant.recruiterUsername} id="recruiteruser"></input>
                <td>{applicant.jobId}</td>
                
                <td>{applicant.jobRole}</td>
                <td>{applicant.companyName}</td>
                <td>
                  <span className="ms-1">
                    {applicant.jobDetails}
                  </span>
                </td>
                <td>
                  {applicant.reqSkills}
                </td>
                <td>
                  
                  <button
                    type="button"
                    className="btn btn-outline-info btn-rounded"
                    onClick={(e) => viewData(applicant.jobId)}
                  >
                    <span className="fw-bolder text-dark" >View</span>
                  </button>
                  
                </td>
                <td>
                  
                  <button
                    type="button"
                    className="btn btn-outline-info btn-rounded"
                    onClick={(e) => addCollege(applicant.jobId)} 
                  >
                    <span className="fw-bolder text-dark" id="jobInt" >Interested</span>
                  </button>
                  
                </td>
              </tr>
              

            </tbody>
              )
            })}
            
          </table>
          <Modal size="xl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened} onHide={closeModal}>
          <Modal.Body><JobView id={ID}/></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal size="xxl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened1} onHide={closeModal1}>
          <Modal.Body>Status
            <label className="form-label" htmlFor="form3Example1cg" id="clguser" style={{ color: 'red' }} ></label>
            </Modal.Body>
            {selectJob}
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal1}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
       
      </div>
    
          
      
    </div>
  );
}
