import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
<div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Our Office</h4>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />SANTCRUZ, MUMBAI 400010, MH</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
        <p className="mb-2"><i className="fa fa-envelope me-3" />info123@recruit.com</p>
        
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Quick Links</h4>
        <a className="btn btn-link" href>About Us</a>
        <a className="btn btn-link" href>Contact Us</a>
        <a className="btn btn-link" href>Our Services</a>
        <a className="btn btn-link" href>Terms &amp; Condition</a>
        <a className="btn btn-link" href>Support</a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Business Hours</h4>
        <p className="mb-1">Monday - Friday</p>
        <h6 className="text-light">09:00 am - 07:00 pm</h6>
        <p className="mb-1">Saturday</p>
        <h6 className="text-light">09:00 am - 12:00 pm</h6>
        <p className="mb-1">Sunday</p>
        <h6 className="text-light">Closed</h6>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="position-relative w-100">
          <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
          <button type="button" className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Footer End */}

    </div>
  )
}
