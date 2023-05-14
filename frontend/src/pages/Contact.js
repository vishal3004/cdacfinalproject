import React from 'react'
import PropTypes from 'prop-types'

import "../Css/contact.css";
import Navbar from './Navbar';
import Footer from './Footer';

function Contact(props) {
  return (
    <div> 
      <Navbar/>
       <header id="contact-header" >
            <div id="contact" className="container align-items-center "  >
                  <div className="col m-3">
                    <h1 className="mt-2 align-content-center">
                      Contact Us
                    </h1>
                  </div>
            </div>
          </header>
      <div className="container mt-5 align-items-center">
    <h3 style={{textAlign: 'center'}}>
      Let's Start a Conversation.
    </h3>
  
  <div className="container-fluid mt-5 row align-items-center">
    <div className="container col-6">
      <form className="text-center border border-light p-5" action="#!">
        <p className="h4 mb-4">Contact us</p>
        <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />
        <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
        <label>Subject</label>
        <select className="browser-default custom-select mb-4">
          <option value disabled>Choose option</option>
          <option value={1} selected>Feedback</option>
          <option value={2}>Report a bug</option>
          <option value={3}>Feature request</option>
          <option value={4}>Feature request</option>
        </select>
        <div className="form-group">
          <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows={3} placeholder="Message" defaultValue={""} />
        </div>
        <div className="custom-control custom-checkbox mb-4">
          <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
          <label className="custom-control-label" htmlFor="defaultContactFormCopy">Send me a copy of this message</label>
        </div>
        <button className="btn btn-info btn-block" type="submit">Send</button>
      </form>
    
    </div>
    <div className="container col-6 map1">
      <div className="row-6 justify-content-center d-flex">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30158.70774588553!2d72.85098084711525!3d19.114741022188095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b41dfb131%3A0xa668297563ddac31!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1670424130777!5m2!1sen!2sin" width={400} height={350} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className=" row-6 ">
        <div className="row" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'}}>
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary" />SANTCRUZ, MUMBAI 400010, MH</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
        </div>
      </div>
    </div>
    <div className="container ">
    
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Are College Placements Worth My Time?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Companies are hiring good students at even higher package than their off campus interviews. The reputation of that company and the position they are providing should be considered before choosing the right one. Not every field has same growth and opportunities.

Even if you will be paid good at the start, you will face problems while switching the jobs. So, they are worth only if a good company is hiring at some role which will help you build a better career.          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Good Package Vs. Better Profile?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          We would always suggest you to opt for better work responsibilities. You will regret the decision to go for higher package after an year or two. If you are not learning something new everyday at your job then its of no use.

And being a fresher you need to have so many things in your list out there. You will face a lot of problems while switching for a new job. Because al you did was to waste the time learning nothing new.          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Does My Field of Working Matters?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          The competition in private sector is real. If you have not chosen your field of interest then you will surely suffer. Students are getting trained on different fields right from their schooling. So the coming generation are already targeting their field of interest and passion.

Your experience only matters when you have a specific work profile. So, deciding your interests before sitting for a college placement is always suggested. This way you will be able to better asses the organization for that specific profile.          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
          Should I Go With a Company Having Bond?
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Bonds are applied by companies so that they do not waste money on training someone. It requires multiple resources for a company to train individuals. And what happens mostly is that the employees fly off after getting trained.

Thus companies prefer to bound them for a 1-3 years of bond. But being a fresher every student questions like “Should i Choose the company with a Bond?”
The answer to this might differ with person to person. We would hardly suggest anyone to join an organization having more than one year of bond. You will lose many opportunities by relying on just one organization for so long.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Which Company is The Best for College Placements?
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          This is such a vague doubt and is heard many a times from students. No company is best suited for every other person. It depends on so many unstable factors that only you can decide for.

Don’t go with an organization just because your friends are doing so. There are so many websites like Glassdoor, GeeksforGeeks, LinkedIn, etc. for checking out the reviews. You can even ask your doubts on Quora about any specific company and how well it can help you grow.

But obviously for assessing them you will need to decide your field. Like some companies might be good for Software Engineers but not for Marketers or other profiles.

Move to their websites and check all the details, their projects, teams, etc. Note them all and then choose the one that is best for you.          </div>
        </div>
      </div>

    </div>
  </div>

  </div>
  
  </div>
  <Footer/>
  
  </div>
  )
}

Contact.propTypes = {}

export default Contact