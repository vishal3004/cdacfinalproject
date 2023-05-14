import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Career() {
  return (

    <div>
      <Navbar/>

<div>
  <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/bulletin-board-3127287_1920.jpg" height="500px" width="100%" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="images/business-idea-1240825_1920.jpg" height="500px" width="100%" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="images/career-111932_1920.jpg" height="500px" width="100%" alt="..." />
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
    <div className="conatiner"><div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3 m-lg-auto">
        <div className="col">
          <div className="card shadow-sm">
            <img src="images/board-3683740_1920.jpg" height="300px" width="100%" alt="" />
            <div className="card-body">
              <p className="card-text">  As a career guidance option after engineering in India for the coming future,
                Data Analytics presents a broad scope and a lot of possibilities.They act as
                intermediaries among seniors and juniors in an office; this is perhaps
                the greatest role they play in a corporate environment.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="images/career-479578_1920.jpg" height="300px" width="100%" alt="" />
            <div className="card-body">
              <p className="card-text">  As a career guidance option after engineering in India for the coming future,
                Data Analytics presents a broad scope and a lot of possibilities.They act as
                intermediaries among seniors and juniors in an office; this is perhaps
                the greatest role they play in a corporate environment.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="images/career-111932_1920.jpg" height="300px" width="100%" alt="" />
            <div className="card-body">
              <p className="card-text">For people who find it difficult to realize the right career meant for them; a career guide helps them sort this confusion. There are infinite career options available to choose from, and without an expert’s proper guidance, one might stick to a few that his/her friends or relatives ask him to pursue. </p>
            </div>
          </div>
        </div>
      </div></div>
  </div>  
  <div className="p-4 mb-3 bg-light rounded m-lg-2 mt-1">
    <h4 className="fst-italic">Career guidance</h4>
    <p className="mb-0">Assess your skills and interests: Take some time to think about what you're good at and what you enjoy doing. Consider your strengths, weaknesses, and areas where you have experience or expertise. This can help you narrow down your career options and find a job that aligns with your skills and interests.
      Research different career paths: Once you have a sense of what you're interested in, do some research to learn more about different career paths that might be a good fit for you. Look into job duties, salary ranges, job outlook, and any education or training requirements.
      Get some experience: If you're not sure what career you want to pursue, try getting some hands-on experience in different fields. This could be through internships, volunteer work, or part-time jobs. You'll be able to get a better sense of what you like and don't like, and you'll also be building your resume.
      Network: Networking is an important part of finding a job in any field. Make connections with people who work in the industries you're interested in, attend job fairs or industry events, and join professional organizations. This can help you learn more about job opportunities and get your foot in the door.
      Be flexible: It's important to be open to different opportunities and to be willing to adapt as you go. Your career path might not be a straight line, and that's okay. Be open to learning new things, taking on new challenges, and adjusting your goals as needed.</p>
  </div>
  <div className="conatiner">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3 m-md-auto">
      <div className="card shadow-sm m-md-0">
        <h5 className="card-title">Frontend Web Developer.</h5>
        <p className="card-text">A Front-End Developer is someone who creates websites and web applications.
          The Front-End Developer creates things that the user sees.
          It is a popular job, and everyone can become a Front-End Developer.</p>
      </div>
      <div className="card shadow-sm m-md-0">
        <h5 className="card-title">Backend Web Developer.</h5>
        <p className="card-text">Backend developers build code that allows a database and an application to communicate with one another. Backend developers take care and maintain the back-end of a website, Including databases, servers, and apps, and they control what you don't see.</p>
      </div>
      <div className="card shadow-sm m-md-0 ">
        <h5 className="card-title">Data Scientist</h5>
        <p className="card-text">Database Developer are generally responsible for the performance, integrity and security of databases. They are often also involved in planning, developing and troubleshooting of databases.</p>
      </div>
    </div>
  </div>
</div>
<Footer/>

    </div>
  )
}