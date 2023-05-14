import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../Css/jobview.css"

export default function JobView1(props) {
    const [jobItem, setJobItem] = useState({});
    let navigate = useNavigate();

  const recruiter = JSON.parse(localStorage.getItem("recruiter"));
    useEffect(() => {
      if (recruiter == null) {
          navigate("/");
      }
  }, []);

  // const { id } = useParams();
  const id = props.id;

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    console.log(id);
    const result = await axios.get(`http://localhost:8080/recruiter/job/${id}`);
    setJobItem(result.data);
    console.log(result.data);
    console.log(jobItem);
  };


  return (
    <div>
      <main>
  {/* Hero Area Start*/}
  <div className="slider-area ">
    <div className="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
      <div className="container mt-2">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>{jobItem.jobRole}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Area End */}
  {/* job post company Start */}
  <div className="job-post-company pt-120 pb-120">
    <div className="container">
      <div className="row justify-content-between">
        {/* Left Content */}
        <div className="col-xl-7 col-lg-8">
          {/* job single */}
          <div className="single-job-items mb-50">
            <div className="job-items">
              <div className="company-img company-img-details">
                <a href="#"><img src="assets/img/icon/job-list1.png" alt="" /></a>
              </div>
              <div className="job-tittle">
                <h4>Job Details</h4>
                <ul><li>{jobItem.jobDetails}</li></ul>
              </div>
              <div className="job-tittle">
                <h4>More Details</h4>
                <ul>
                  <li><i className="fas fa-map-marker-alt" />{jobItem.location}</li>
                  <li>{jobItem.ctc}</li>
                </ul>
              </div>
            </div>
          </div>
          {/* job single End */}
          <div className="job-post-details">
            <div className="post-details1 mb-50">
              {/* Small Section Tittle */}
            
              <p>{jobItem.jobDetails}.</p>
            </div>
            <div className="post-details2  mb-50">
              {/* Small Section Tittle */}
              <div className="small-section-tittle">
                <h4>Required Knowledge, Skills, and Abilities</h4>
              </div>
              <ul>
               <li>{jobItem.reqSkills}</li>
              </ul>
            </div>
            <div className="post-details2  mb-50">
              {/* Small Section Tittle */}
              <div className="small-section-tittle">
                <h4>Education + Experience</h4>
              </div>
              <ul>
                <li>BE : {jobItem.be}+</li>
                <li>HSC : {jobItem.hsc}+</li>
                <li>SSC : {jobItem.ssc}</li>
              </ul>
            </div>
            <div className="post-details2  mb-50">
              {/* Small Section Tittle */}
              <div className="small-section-tittle">
                <h4>Selection Process</h4>
              </div>
              <ul>
                <li>{jobItem.selectionProcess}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="col-xl-4 col-lg-4">
          <div className="post-details3  mb-50">
            {/* Small Section Tittle */}
            <div className="small-section-tittle">
              <h4>Job Overview</h4>
            </div>
            <ul>
              <li>Posted date : <span>{jobItem.postedDate}</span></li>
              <li>Location : <span>{jobItem.location}</span></li>
              <li>Vacancy : <span>{jobItem.vacancy}</span></li>
             
              <li>Salary :  <span>{jobItem.ctc}</span></li>
              <li>Application date : <span>{jobItem.endDate}</span></li>
            </ul>
            
          </div>
          <div className="post-details4  mb-50">
            {/* Small Section Tittle */}
            <div className="small-section-tittle">
              <h4>Company Information</h4>
            </div>
            <span>{jobItem.companyName}</span>
            
            <ul>
              <li>Name: <span>{jobItem.companyName} </span></li>
              <li>Web : <span> {jobItem.companyName}.com</span></li>
              <li>Email: <span>carrier.{jobItem.companyName}@gmail.com</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* job post company End */}
</main>

    </div>
  )
}
