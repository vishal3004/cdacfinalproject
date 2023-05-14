import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobView from "./JobView";
import SideNavBar from "./SideNavbar";

export default function ViewStudent() {
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

const institueObj = JSON.parse(localStorage.getItem("institute"));

const institute ="rait";

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
      
      const response = await axios.get(`http://localhost:8080/student/getinstitute/${institueObj.clgName}`);
      setapplicantsList(response.data);
      console.log(institueObj.clgName);
  }
 

 
  

  useEffect(() => {
      getAllapplicants();
  }, []);

  return (
    <div>
      <div>
        <SideNavBar />
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
                <th scope="col" width="1%">
                  Id
                </th>
                <th scope="col" width="10%">
                  Student Roll Number
                </th>

                <th scope="col" width="15%">
                  Name
                </th>
                <th scope="col" width="20%">
                  Phone
                </th>
                <th scope="col" width="20%">
                  location
                </th>
                <th scope="col" width="10%">
                  email
                </th>
                
              </tr>
            </thead>

            {applicantsList.map((applicant) => {
              return(
                <tbody>
              <tr>

                <td>{applicant.studentId}</td>
                
                <td>{applicant.studentRollNo}</td>
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
      
        </div>
       
      </div>
    
          
      
    </div>
  );
          }
