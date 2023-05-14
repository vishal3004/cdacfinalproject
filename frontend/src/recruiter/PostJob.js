import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/postjob.css";

import { Button, Modal } from "react-bootstrap";
import SideNavBar1 from "./SideNavbar1";

export default function PostJob() {
  let navigate = useNavigate();

  const recruiter = JSON.parse(localStorage.getItem("recruiter"));
    useEffect(() => {
      if (recruiter == null) {
          navigate("/");
      }
  }, []);
  const form = useRef();
  const [user, setUser] = useState({
    jobRole: "",
    jobDetails: "",
    companyName: recruiter.companyName,
    branch: "",
    location: "",
    ctc: "",
    postedDate: "",
    endDate: "",
    selectionProcess: "",
    ssc: "",
    hsc: "",
    be: "",
    me: "",
    reqSkills:"",
    recruiterUsername:recruiter.username
    
  });
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {

    e.preventDefault();
    const res = await axios.post("http://localhost:8080/recruiter/job", user);
    console.log(user);

    if (res.status === 200) {
      console.log("success");

      openModal();
      setUser({
        jobRole: "",
    jobDetails: "",
  
    branch: "",
    location: "",
    ctc: "",
    postedDate: "",
    endDate: "",
    selectionProcess: "",
    ssc: "",
    hsc: "",
    be: "",
    me: "",
    vacancy:"",
    reqSkills:"",
   
      });
    }
  };
  return (
    <div>
      <SideNavBar1 />
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Post Job</h3>
            <div className="card">
              <form className="form-card" onSubmit={(e) => onSubmit(e)}>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
            
                    <label className="form-control-label px-3">
                      Job Role<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="vjobRole"
                      name="jobRole"
                      placeholder="Enter The Job Role"
                      onChange={(e) => onInputChange(e)}
                      value={user.jobRole}
                      required
                     
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Company name<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="vcompany"
                      name="companyName"
                      placeholder="Enter your last name"
                      onChange={(e) => onInputChange(e)}
                      value={user.companyName}
                      required
                      
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Job Location<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="vlocation"
                      name="location"
                      placeholder="Enter Location"
                      onChange={(e) => onInputChange(e)}
                      value={user.location}
                      required
                     
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                    Vacancy<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="number"
                      id="vvacancy"
                      name="vacancy"
                      placeholder="Vacancy"
                      onChange={(e) => onInputChange(e)}
                      value={user.vacancy}
                      
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      BE<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="number"
                      id="vbe"
                      name="be"
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter BE Marks Criteria"
                      value={user.be}
                     
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                    HSC<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="number"
                      id="hsc"
                      name="hsc"
                      placeholder="Enter HSC Marks Criteria"
                      onChange={(e) => onInputChange(e)}
                      value={user.hsc}
                      
                    />
                  </div>
                </div>

                
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      SSC<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="number"
                      id="vssc"
                      name="ssc"
                      placeholder="Enter SSC Marks Criteria"
                      onChange={(e) => onInputChange(e)}
                      value={user.ssc}
                     
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                    ME<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="number"
                      id="vme"
                      name="me"
                      placeholder="Enter ME Marks Criteria"
                      onChange={(e) => onInputChange(e)}
                      value={user.me}
                      
                    />
                  </div>
                </div>

                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                    Posted Date<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="date"
                      id="vpostedDate"
                      name="postedDate"
                      placeholder="Job Post Date"
                      onChange={(e) => onInputChange(e)}
                      value={user.postedDate}
                     
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                    Job Application End Date<span className="text-danger"> </span>
                    </label>
                    <input
                      type="date"
                      id="vendDate"
                      name="endDate"
                      placeholder="Job Application Date"
                      onChange={(e) => onInputChange(e)}
                      value={user.endDate}
                      
                    />
                  </div>
                </div>


                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
            
                    <label className="form-control-label px-3">
                      Branches<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="vbranch"
                      name="branch"
                      placeholder="Enter The Job Branches"
                      onChange={(e) => onInputChange(e)}
                      value={user.branch}
                     
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                    Selection Process<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="vselectionprocess"
                      name="selectionProcess"
                      placeholder="Enter the process of selection"
                      onChange={(e) => onInputChange(e)}
                      value={user.selectionProcess}
                      
                    />
                  </div>
                </div>

                
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
            
                    <label className="form-control-label px-3">
                      Username Of Recruiter<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="vrecruiterUsername"
                      name="recruiterUsername"
                      placeholder="Enter a Username"
                      onChange={(e) => onInputChange(e)}
                      value={user.recruiterUsername}
                      required
                     
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
            
            <label className="form-control-label px-3">
              CTC<span className="text-danger"> *</span>
            </label>
            <input
              type="text"
              id="vctc"
              name="ctc"
              placeholder="Enter the CTC"
              onChange={(e) => onInputChange(e)}
              value={user.ctc}
              required
             
            />
          </div>
                </div>


                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Job Details<span className="text-danger"> *</span>
                    </label>
                    <textarea
                      id="vjobdetails"
                      name="jobDetails"
                      placeholder="Job Details"
                      onChange={(e) => onInputChange(e)}
                      value={user.jobDetails}
                      required
                      
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
            
                    <label className="form-control-label px-3">
                      Required Skills<span className="text-danger"> *</span>
                    </label>{" "}
                    <textarea
                      id="vreqSkills"
                      name="reqSkills"
                      placeholder="Please enter required skills"
                      value={user.reqSkills}
                      onChange={(e) => onInputChange(e)}
                      required
                      
                    />
                  </div>
                </div>
                


                
                
                <div className="row justify-content-end">
                  <div className="form-group col-sm-6">
    
                    <button type="submit" className="btn btn-primary">
                      Post Job
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Modal size="xxl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Application form Sumbitted!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Job Posted</Modal.Body>
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


