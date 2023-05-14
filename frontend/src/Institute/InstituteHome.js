import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../Css/insitutehome.css"
import SideNavbar from './SideNavbar'

export default function InstituteHome() 
{
    const { clgName } = useParams();
    const navigate = useNavigate();

    const institute = JSON.parse(localStorage.getItem("institute"));
    useEffect(() => {
      if (institute == null) {
          navigate("/");
      }
  }, []);

    
    
  return (
    <div>
      <div>
        <SideNavbar/>
  {/* Page Header Start */}
  <div className="container-fluid page-header mt-3 py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">{clgName}</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
        <p className="fs-5 fw-medium text-primary">Welcome To Our Recruit</p>
        <h1 className="display-5 mb-5">Institute Home</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src="images/img/icon/icon-2.png" alt="Icon" />
              </div>
              <h5 className="mb-3">Create Students Profile</h5>
              <p className="mb-0">A format to create students profile for the placements</p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
              <Link className="text-primary fw-medium" to={"/institutehome/createstudent"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src="images/img/icon/icon-4.png" alt="Icon" />
              </div>
              <h5 className="mb-3">View Jobs</h5>
              <p className="mb-0">You will see applicable jobs and their detailed information</p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
            <Link className="text-primary fw-medium" to={"/institutehome/jobdisplay"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
       
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src="images/mortarboard.png" alt="Icon" />
              </div>
              <h5 className="mb-3">View Students Profile</h5>
              <p className="mb-0">View and Manage Students Profile Details and their campus placements status </p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
            <Link className="text-primary fw-medium" to={"/institutehome/viewstudent"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </div>
  {/* Service End */}
</div>

    </div>
  )
}
