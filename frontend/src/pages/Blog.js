import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
export default function Blog() {
  return (
    <div>
        <Navbar/>
      <div>
  <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/attitude-g617b68e5c_1920.jpg" height={400} width="100%" />
      </div>
      <div className="carousel-item">
        <img src="images/job-gcd0ca9a02_1920.jpg" height={400} width="100%" />
      </div>
      <div className="carousel-item">
        <img src="images/people-g9ea692be8_1280.jpg" height={400} width="100%" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className="p-4 mb-3 bg-light rounded">
    <h4 className="fst-italic">About</h4>
    <p className="mb-0">
      Placement management software enables you to plan placements, train
      students in accordance with relevant market demands, organize placement
      drives, and allow companies to recruit students. The placement software
      takes complete control of any college’s placement efforts right from
      nurturing an employer to hiring from an institute to training,
      evaluation, and job fitment. In addition, it manages the student and
      placement cell information, allows students to create profiles, apply
      for jobs, get shortlisted with greater visibility, involve in internship
      activities, and do much more.
    </p>
    <div>
      <p>
        A smart placement management system also maintains accurate student
        data records, placement scheduling, and student notifications to stay
        tuned and track placements in order to achieve your institution’s
        lofty goals. Student placement management software can help you and
        your team focus on managing placements by reducing the administrative
        burden. It gives a centralized pathway where multiple roles like
        students, placement officers, and recruiters can meet up and
        collaboratively boost an institution’s placement rates. Here are some
        of the reasons why placement software is crucial to your institution.
      </p>
    </div>
  </div>
  <div className="container">
    <div>
      <h1 center style={{textAlign: 'center'}}>
        Our Testimonials:
      </h1>
    </div>
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3 mb-2 bg-success text-white">
          <div className="col p-4 d-flex flex-column position-static">
            <h3 className="mb-0">Pranav Salwaru</h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto">
              I am writing to express my deep gratitude for the opportunity to
              have earned my PhD in Library and Information Science from
              Manglayatan University. Pursuing this degree has been a lifelong
              dream of mine
            </p>
            <a href="https://www.linkedin.com/in/pranav-salwaru-9980521b2/">LinkedIn profile</a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src="images/Pranav Salwaru1.jpg" height="250px" width="175px" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3 mb-2 bg-success text-white">
          <div className="col p-4 d-flex flex-column position-static">
            <h3 className="mb-0">Suyash Dudhwadkar</h3>
            <div className="mb-1 text-muted">Nov 11</div>
            <p className="mb-auto">
              It was an enriching experience to study at Mangalayatan
              University. I am really thankful to the faculties as well as to
              other working staff at this university that shaped.
            </p>
            <a href="https://www.linkedin.com/in/suyash-dudhawadkar2112/">LinkedIn profile</a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src="../images/Suyash.jpeg" height="250px" width="175px" />
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3 mb-2 bg-success text-white">
          <div className="col p-4 d-flex flex-column position-static">
            <h3 className="mb-0">Aniket Jadhao</h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto">
              Mangalayatan University has been a great contributor to the
              development of my personality. I have established my leadership,
              time management and team skills
            </p>
            <a href="https://www.linkedin.com/in/aniket-jadhao-081095190">LinkedIn profile</a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src="../images/Aniket.jpeg" height="250px" width="175px" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3 mb-2 bg-success text-white">
          <div className="col p-4 d-flex flex-column position-static">
            <h3 className="mb-0">Vishal Patil</h3>
            <div className="mb-1 text-muted">Nov 11</div>
            <p className="mb-auto">
              My experience at Mangalayatan University is great and memorable.
              The mentors at Mangalayatan University helped us enhancing my
              academic and interpersonal skills. I am thankful for Training &amp;
            </p>
            <a href="https://www.linkedin.com/in/vishal-patil-89a38215b">LinkedIn profile</a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src="../images/Vishal.jpeg" height="250px" width="175px" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div>
        <h1>Our Recruitment Partners:</h1>
      </div>
      <div className="col-lg-1">
        <img src="../images/Baker.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/Info.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/cap.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/Wipro.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/tcs.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/L&T.png" height="50px" width="50px" alt="" />
      </div>
      <div className="col-lg-1">
        <img src="../images/Baker.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/Info.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/cap.png" height="50px" width="50px" alt="" />
      </div>
      <div className="col-lg-1">
        <img src="../images/Baker.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/Info.png" height="50px" width="50px" alt="" />
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-1">
        <img src="../images/cap.png" height="50px" width="50px" alt="" />
      </div>
    </div>
  </div>
  <div className="container">
    <h1 center style={{textAlign: 'center'}}>Our Vision:</h1>
    <p>
      The vision for a placement management system is to create a
      comprehensive platform that empowers organizations to manage their
      recruitment and placement processes efficiently and effectively. The
      system should streamline the entire recruitment process, from job
      posting to candidate selection and onboarding, by providing all the
      necessary tools and features in one platform. The core values that drive
      the vision for a placement management system include: Efficiency: The
      placement management system should 4e designed to optimize the
      recruitment process, making it faster and more efficient for recruiters
      and candidates alike. Transparency: The system should provide complete
      visibility into the recruitment process for all stakeholders, including
      candidates, recruiters, and hiring managers. Fairness: The system should
      ensure that the recruitment process is fair and objective, without any
      bias or discrimination based on factors such as gender, race, or
      ethnicity. Data-driven: The system should leverage data analytics and
      machine learning algorithms to provide insights and recommendations that
      enable better decision-making. User-centric: The system should be
      designed with the end-user in mind, providing an intuitive and
      user-friendly interface that simplifies the recruitment process.
      Integration: The system should integrate seamlessly with other HR
      systems, such as payroll and performance management, to provide a
      complete end-to-end solution. The ultimate goal of a placement
      management system is to help organizations attract and retain top
      talent, while minimizing the time and effort required to do so. By
      providing a streamlined, data-driven, and user-centric platform, the
      system can help organizations achieve this goal, ultimately driving
      business success and growth.
    </p>
  </div>
</div>
<Footer/>

    </div>
  )
}
