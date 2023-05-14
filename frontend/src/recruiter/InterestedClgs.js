import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ClgView from './ClgView';

import SideNavBar1 from './SideNavbar1'

export default function InterestedClgs() {

  const [isModalOpened,setIsModalOpened] = useState(false);
  const [id, setId] =useState();
  const [propId, setPropId] = useState();
  
  useEffect(() => {
    loadJob();
  }, []);

  const openModal = ()=>{
    setIsModalOpened(true);
}
const closeModal = ()=>{
    setIsModalOpened(false);
}

const viewData = (getId)=>{
  setPropId(getId);
  console.log(propId);
  openModal();
  
}
  
  
  const[jobItem, setJobItem] = useState([{}]);
  const[jobColleges, setJobColleges] = useState({});
  
  const loadJob = async (getId) => {
    console.log(getId);
    const result = await axios.get(`http://localhost:8080/institute/interestedclgs/byjobid/${getId}`);
    setJobItem(result.data);
    console.log(result.data);
  };


  const loadClg = async(getId) =>{
    console.log("clg id "+getId);
    const clg = await axios.get(`http://localhost:8080/institute_user/${getId}}`);
    console.log(clg.data);
  }
  return (
    <div>
      <div>
        <div>
  <SideNavBar1/>
  <div className="bg-body mt-5 container"><h3>Posted jobs</h3></div>
</div>

<div className="container mt-5 px-2">
  <div className="mb-2 d-flex justify-content-between align-items-center">
    <div className="position-relative mb-3">
      <span className="position-absolute search"><i className="fa fa-search" /></span>
      
      <input className="form-control w-100" name="id" value={id}  onChange={(event) => setId(event.target.value)} placeholder="Search by JobId" />
      <button type="button" class="btn btn-secondary" onClick={(e) => loadJob(id)}>Search</button>

    </div>
  </div>
  <div className="table-responsive">
    <table className="table table-responsive table-borderless">
      <thead>
        <tr className="bg-light">
          
          <th scope="col" width="20%">Job Id</th>
          <th scope="col" width="20%">Company Id</th>
          <th scope="col" width="25%">Status</th>
          <th scope="col" width="25%">View </th>

        </tr>
      </thead>
      {jobItem.map((clg) => {
              return(
      <tbody>
        <tr>
          <td>{clg.jobId}</td>
          <td>{clg.instituteId}</td>
          <td>{clg.status}</td>
          <button type="button"   onClick={(e) => viewData(clg.instituteId)} class="btn btn-secondary">View</button>
          
        </tr>
        <Modal size="xl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened} onHide={closeModal}>
          <Modal.Body><ClgView id={clg.instituteId}/></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
        
      </tbody>
      )})}
    </table>
  </div>
</div>



    </div>
    </div>
  )
}
