import React from 'react'
import "../Css/homebody.css";

export default function HomeBody() {
  return (
    <div>
      <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-0 feature-row">
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="feature-item border h-100 p-5">
          <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
            <img className="img-fluid" src="images/education.png" alt="Icon" />
          </div>
          <h5 className="mb-3">Students</h5>
          <p className="mb-0">Empowers students to create job profiles, search, and apply for jobs and internships; instant job matching that takes their career to the next level</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
        <div className="feature-item border h-100 p-5">
          <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
            <img className="img-fluid" src="images/enterprise.png" alt="Icon" />
          </div>
          <h5 className="mb-3">Companies</h5>
          <p className="mb-0">Create multiple job postings and get instant access to the entire students' database to match them based on skills, GPA, and certificates for the best hiring experience.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
        <div className="feature-item border h-100 p-5">
          <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
            <img className="img-fluid" src="images/group.png" alt="Icon" />
          </div>
          <h5 className="mb-3">Placement Team</h5>
          <p className="mb-0">Attract several companies and manage them from a centralized place; capture data and reports related to students and employers in a single click, securely.</p>
        </div>
      </div>
     
    </div>
  </div>
  </div>


  <h1 class="display-5 mb-5">What Clients Say About Our Services!</h1>

  <div className="container container1 mx-auto mt-5 col-md-10 col-11">
  
  <div className="row" style={{justifyContent: 'center'}}>
    <div className="card col-md-3 col-11">
      <div className="card-content">
        <div className="card-body p-0">
          <div className="profile mb-4 mt-3"> <img alt='m3' src="https://i.imgur.com/Ur43esv.jpg" /> </div>
          <div className="card-subtitle">
            <p> <small className="text-muted"> <i className="fas fa-quote-left" /> I expected anything less than perfect for the team of experts. They are the best team ever.Listening to customers is about connecting with them. It involves paying close attention to their needs and understanding how you can help them achieve their goals.

<i className="fas fa-quote-left fa-flip-horizontal" /> </small> </p>
          </div>
          <div className="card-body company"> <i className="fab fa-ebay fa-2x" /> <small className="intro text-muted">Sam Diago, Marketer</small> </div>
        </div>
      </div>
    </div>
    <div className="card col-md-3 col-11 second">
      <div className="card-content">
        <div className="card-body p-0">
          <div className="profile mb-4 mt-3"> <img alt='m2' src="https://i.imgur.com/8RKXAIV.jpg" /> </div>
          <div className="card-subtitle">
            <p> <small className="text-muted"> <i className="fas fa-quote-left " /> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing.If you’re experiencing an issue with a developer tool or service, find out if it’s a known issue or if there’s maintenance in progress <i className="fas fa-quote-left fa-flip-horizontal" /> </small> </p>
          </div>
          <div className="card-body company"> <i className="fab fa-amazon fa-2x" /><small className="intro text-muted">Monty Jones, Software Developer</small> </div>
        </div>
      </div>
    </div>
    <div className="card col-md-3 col-11 third">
      <div className="card-content">
        <div className="card-body p-0">
          <div className="profile mb-4 mt-3"> <img alt='m1' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp " /> </div>
          <div className="card-subtitle">
            <p> <small className="text-muted"> <i className="fas fa-quote-left" /> Most issues here will be handled by email support, but as the issues become more complex, users will start turning their attention towards phone support. The more difficult the issues become, the more likely they will want to speak with a live tech support agent. <i className="fas fa-quote-left fa-flip-horizontal" /> </small> </p>
          </div>
          <div className="card-body company"> <i className="fab fa-yelp fa-2x" /><small className="intro text-muted">John Tim, Tech Support</small> </div>
        </div>
      </div>
    </div>
  </div>
</div>




<h1 class="display-5 mb-5">Our Best achievement!!!</h1>

{/* Carousel wrapper */}
<div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
  {/* Controls */}
  
  
  {/* Inner */}
  <div className="carousel-inner py-4">
    {/* Single item */}
    <div className="carousel-item active">
      <div className="container container1">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">Anna Deynah</h5>
            <p>UX Designer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Job Sites or Job Boards or Talent Marketplaces, however you call it, are platforms that allow recruiters and job seekers to discover and redefine their goals and requirements. These platforms not only make the hiring process more efficient and effective for organisations but also offer job seekers a plethora of opportunities and access to find just the right organisation for themselves.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
            </ul>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">John Doe</h5>
            <p>Web Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              An end-to-end career growth platform that uses a powerful two-way matching technology to connect job seekers and recruiters. It effectively matches applicant profiles to relevant job openings. It also has its own career skill site - Shine Learning with several online upskilling courses.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li>
                <i className="fas fa-star-half-alt fa-sm" />
              </li>
            </ul>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4" src="https://i.imgur.com/8RKXAIV.jpg" alt="avatar" style={{width: '150px'}} />
            <h5 className="mb-3">Van Rose</h5>
            <p>Backend Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              A job portal for tech geeks who are interested in Java, Python, Ruby, as well as emerging technologies like Blockchain, Augmented Reality, Virtual Reality, IOT, and cryptocurrency.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="fas fa-star fa-sm" /></li>
              <li><i className="far fa-star fa-sm" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
  {/* Inner */}
</div>
{/* Carousel wrapper */}

    </div>
  )
}