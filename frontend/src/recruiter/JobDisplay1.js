import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import JobView1 from "./JobView1";
import SideNavBar1 from "./SideNavbar1";

export default function JobDisplay1() {
  const [applicantsList, setapplicantsList] = useState([]);
  const [selectJob, setselectJOb] = useState('Interested');
  const [isModalOpened,setIsModalOpened] = useState(false);
  let navigate = useNavigate();

  const recruiter = JSON.parse(localStorage.getItem("recruiter"));
    useEffect(() => {
      if (recruiter == null) {
          navigate("/");
      }
  }, []);
 const [ID, setId] =useState(1);
 
 const username = recruiter.username;

  const openModal = ()=>{
      setIsModalOpened(true);
  }
  const closeModal = ()=>{
      setIsModalOpened(false);
  }

  const viewData = (getId)=>{
    setId(getId);
    console.log(ID);
    openModal();
    
}
  async function getAllapplicants() {
      const response = await axios.get(`http://localhost:8080/recruiter/job/username/${username}`);
      setapplicantsList(response.data);
  }

 
  

  useEffect(() => {
      getAllapplicants();
  }, []);

  return (
    <div>
      <div>
        <SideNavBar1 />
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
                  Job ID
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
              </tr>
            </thead>

            {applicantsList.map((applicant) => {
              return(
                <tbody>
              <tr>
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
                  >
                    <span className="fw-bolder text-dark" onClick={(e) => viewData(applicant.jobId)}>View</span>
                  </button>
                  
                </td>
              </tr>
              

            </tbody>
              )
            })}
            
          </table>
          <Modal size="xl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened} onHide={closeModal}>
          <Modal.Body><JobView1 id={ID}/></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
         
        </div>
      </div>
    
          
      
    </div>
  );
}
