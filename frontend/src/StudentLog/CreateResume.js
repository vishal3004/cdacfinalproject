import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import "../Css/studentresume.css"

export default function CreateResume() {

    const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    if (student == null) {
        navigate("/");
    }
}, []);

    const [Fname, seatFname] = useState(student.name)
   const [mail, setmail] = useState(student.email)
    const [phone, setphone] = useState(student.phone)
    const [city, setcity] = useState(student.location)
    const [date, setdate] = useState(student.birthDate)
    const id = useParams();

    const [Specs, setSpecs] = useState("");
const [Institute, setInstitute] = useState("");
const [passyear, setpassyear] = useState("");
const [marksobt, setmarksobt] = useState("");
const [percentage, setpercentage] = useState("");
const [totmarks, settotmarks] = useState("");
const [cgpa, setcgpa] = useState("");
const [qualification, setQualification] = useState("");

const[Objective,setObjective]=useState("");
const[Achievement,setAchievement]=useState("");
const[Certification,setCertification]=useState("");
const[Intership,setIntership]=useState("");

const[extra, setExtra] = useState();

const [Projtitle, setProjtitle] = useState("")
    const [pduration, setPduration] = useState("")
    const [pdate, setPdate] = useState("")
    const [pdescription, setPdescription] = useState("")
    const [pplatform, setPplatform] = useState("")

    const [skills , setSkills] = useState();

    const [isModalOpened, setIsModalOpened] = useState(false);
  
    const openModal = () => {
      setIsModalOpened(true);
    };
    const closeModal = () => {
      setIsModalOpened(false);
    };


    const save = async function (e) {
        e.preventDefault();
        if(validate()){
            var data =
        {
            studentId:student.studentId,
            name:Fname,
            email: mail,
            phone: phone,
            location: city,
            birthDate: date,

        }
        const res = await axios.put("http://localhost:8080/student", data);
        if(res.status===200) {
            openModal();
            console.log("success");
        }
      
        }
        
    }
    



    return (
        <div>

        
        <div className="mt-4">
            <div className="text-center" style={{ height: "10vh" }}>
                <h4 className="mt-2 ">Personal Details</h4>
            </div>

            <div className="container-fluid justify-content-center">
                <table>
                    <tr>
                        <td>
                            <h5 >Name<span className="text-danger"> </span></h5>
                            <input type="text"
                                id="vname"
                                value={Fname}
                                placeholder="Enter Full Name"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => seatFname(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="name" style={{ color: 'red' }} ></label>
                        </td>
                        <td>
                            <h5>Email<span className="text-danger"> </span></h5>
                            <input type="email"
                                id="vemail"
                                value={mail}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Email"
                                required=""
                                onChange={(event) => setmail(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="email" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h5>Contact<span className="text-danger"> </span></h5>
                            <input type="number"
                                id="vphone"
                                value={phone}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter phone"
                                required=""
                                onChange={(event) => setphone(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="phone" style={{ color: 'red' }} ></label>
                        </td>
                        <td>
                            <h5>Birth Date<span className="text-danger"> </span></h5>
                            <input type="date"
                                id="vbirthdate"
                                value={date}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter The BirthDate"
                                required=""
                                onChange={(event) => setdate(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="birthdate" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>City<span className="text-danger"> </span></h5>
                            <input type="text"
                                value={city}
                                id="city"
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Location Name"
                                required=""
                                onChange={(event) => setcity(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="location" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>
                </table>

                <div className="text-center">
                    <button onClick={(e) => save(e)} className="btn btn-primary mt-3">Save</button>
                </div>

            </div>
            <Modal size="xxl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Application form Sumbitted!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Done</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
          

        </div>


{/* AcademicInfo///////////////////////////////////////////////// */}

        <div className="mt-4">
      <div className="text-center" style={{ height: "10vh" }}>
        <h4 className="mt-2 ">Academic Details</h4>
      </div>

      <div className="container-fluid justify-content-center">
        <table>
          <tr>
            <td>
              <h5>
              Qualification<span className="text-danger"> *</span>
              </h5>
              <select
                className="form-select mb-3"
                id="vqualification"
                name="qualification"
                onChange={(event) => setQualification(event.target.value)}
              >
                <option selected >Select Qualification </option>
                
                <option value="B.E" defaultValue={"B>E"}>B.E/B.Tech</option>
               
              </select>
              <label className="form-label" htmlFor="form3Example1cg" id="qualification" style={{ color: 'red' }} ></label>
            </td>
            <td className="ps-4">
              <h5>
                Specialization<span className="text-danger"> *</span>
              </h5>
              <input
                type="text"
                value={Specs}
                id="vSpect"
                name="specialization"
                placeholder="Enter Specialization"
                className="form-control form-control-sm mb-3 inputform "
                required=""
                onChange={(event) => setSpecs(event.target.value)}
              ></input>
              <label className="form-label" htmlFor="form3Example1cg" id="spect" style={{ color: 'red' }} ></label>
            </td>
          </tr>

          <tr>
            <td>
              <h5>
                Institute<span className="text-danger"> *</span>
              </h5>
              <input
                type="text"
                value={Institute}
                id="vinst"
                name="institute"
                placeholder="Enter Institute Name"
                className="form-control form-control-sm mb-3 inputform "
                required=""
                onChange={(event) => setInstitute(event.target.value)}
              ></input>
              <label className="form-label" htmlFor="form3Example1cg" id="inst" style={{ color: 'red' }} ></label>
            </td>
            <td className="ps-4">
              <h5>
                Year of Passing<span className="text-danger"> *</span>
              </h5>
              <input
                type="number"
                id="vpassYear"
                value={passyear}
                name="passingYear"
                className="form-control form-control-sm mb-3 inputform"
                placeholder="Enter Passing Year"
                required=""
                onChange={(event) => setpassyear(event.target.value)}
              ></input>
              <label className="form-label" htmlFor="form3Example1cg" id="passYear" style={{ color: 'red' }} ></label>
            </td>
          </tr>
          <tr>
            <td>
              <h5>
                Marks Obtained<span className="text-danger"> *</span>
              </h5>
              <input
                type="number"
                value={marksobt}
                id="vobtaineMarks"
                name="obtainedMarks"
                className="form-control form-control-sm mb-3 inputform"
                placeholder="Enter Obtained Marks"
                required=""
                onChange={(event) => setmarksobt(event.target.value)}
              ></input>
              <label className="form-label" htmlFor="form3Example1cg" id="obtaineMarks" style={{ color: 'red' }} ></label>
            </td>
            <td className="ps-4">
              <h5>
                Total Marks<span className="text-danger"> *</span>
              </h5>
              <input
                type="number"
                value={totmarks}
                name="totalMarks"
                id="vtotal"
                className="form-control form-control-sm mb-3 inputform"
                placeholder="Enter Total Marks"
                required=""
                onChange={(event) => settotmarks(event.target.value)}
              ></input>
              <label className="form-label" htmlFor="form3Example1cg" id="totalMarks" style={{ color: 'red' }} ></label>
            </td>
          </tr>
          <tr>
            <td>
              <h5>
                Percentage<span className="text-danger"> *</span>{" "}
              </h5>
              <input
                type="text"
                value={(marksobt/totmarks*100).toFixed(2)}
                name="percentage"
                id="vpercentage"
                placeholder="% "
                className="form-control form-control-sm mb-3 inputform "
                required="value"
                onChange={(event) => setpercentage(event.target.value)}
              ></input>
              <label className="form-label" htmlFor="form3Example1cg" id="percentage" style={{ color: 'red' }} ></label>
            </td>
            <td className="ps-4">
              <h5>
                CGPA<span className="text-danger"></span>{" "}
              </h5>
              <input
                type="text"
                value={cgpa}
                name="cgpa"
                id="vcgpa"
                placeholder="Enter CGPA if Applicable"
                className="form-control form-control-sm mb-3 inputform "
                required="value"
                onChange={(event) => setcgpa(event.target.value)}
              ></input>
              <label className="form-label" htmlFor="form3Example1cg" id="cgpa" style={{ color: 'red' }} ></label>
            </td>
          </tr>
        </table>

        <div className="text-center">
          <button onClick={(e) => save(e)}className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
      
    </div>

    <div className="mt-4">
            <div className="text-center" style={{ height: "10vh" }}>
                <h4 className="mt-2 ">Personal Details</h4>
            </div>

            <div className="container-fluid justify-content-center">
                <table>
                    <tr>
                        <td>
                            <h5 >Name<span className="text-danger"> </span></h5>
                            <input type="text"
                                id="vname"
                                value={Fname}
                                placeholder="Enter Full Name"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => seatFname(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="name" style={{ color: 'red' }} ></label>
                        </td>
                        <td>
                            <h5>Email<span className="text-danger"> </span></h5>
                            <input type="email"
                                id="vemail"
                                value={mail}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Email"
                                required=""
                                onChange={(event) => setmail(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="email" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h5>Contact<span className="text-danger"> </span></h5>
                            <input type="number"
                                id="vphone"
                                value={phone}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter phone"
                                required=""
                                onChange={(event) => setphone(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="phone" style={{ color: 'red' }} ></label>
                        </td>
                        <td>
                            <h5>Birth Date<span className="text-danger"> </span></h5>
                            <input type="date"
                                id="vbirthdate"
                                value={date}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter The BirthDate"
                                required=""
                                onChange={(event) => setdate(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="birthdate" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>City<span className="text-danger"> </span></h5>
                            <input type="text"
                                value={city}
                                id="city"
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Location Name"
                                required=""
                                onChange={(event) => setcity(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="location" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>
                </table>

                <div className="text-center">
                    <button onClick={(e) => save(e)} className="btn btn-primary mt-3">Save</button>
                </div>

            </div>
           
          

        </div>

        <div className="mt-4">
            <div className="text-center" style={{ height: "10vh" }}>
                <h4 className="mt-2 ">Project Details</h4>
            </div>

            <div className="container-fluid justify-content-center">
                <table >
                    <tr>
                        <td className="ps-4">
                            <h5>Project Title<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={Projtitle}
                                placeholder="Enter Project Title"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                name="title"
                                id="vtitle"
                                onChange={(event) => setProjtitle(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="title" style={{ color: 'red' }} ></label>
                        </td>
                        <td>
                            <h5>Duration<span className="text-danger"> *</span></h5>
                            <input type="number"
                                value={pduration}
                                placeholder="Enter the Duration"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                id="vduration"
                                name="duration"
                                onChange={(event) => setPduration(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="duration" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>

                    <tr>
                        
                        <td className="ps-4">
                            <h5>End Date<span className="text-danger"> *</span></h5>
                            <input type="date"
                                value={pdate}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Date"
                                required=""
                                id="vdate"
                                name="date"
                                onChange={(event) => setPdate(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="date" style={{ color: 'red' }} ></label>
                        </td>
                        <td>
                            <h5 >Platform used<span className="text-danger"> *</span></h5>
                            <select className="form-select mb-3" id="vplatform" value={pplatform} onChange={(event) => setPplatform(event.target.value)} >
                                <option selected >Select Qualification </option>
                                <option value="C">C</option>
                                <option value="Cpp">C++</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value=".net">.net</option>
                                <option value="React">React</option>
                                <option value="Python">Python</option>
                                <option value=".net">.net</option>
                                <option value="React">React</option>
                            </select>
                            <label className="form-label" htmlFor="form3Example1cg" id="platform" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>
                    <tr>
                        
                    </tr>

                </table>
                <div className="textar form-floating mb-2">
                    <h5>Description<span className="text-danger"  > *</span></h5>
                    <textarea className="inputform form-control" value={pdescription} id="vdescription" name="description" style={{ width: "500px", height: "100px" }} onChange={(event) => setPdescription(event.target.value)}></textarea>
                    <label className="form-label" htmlFor="form3Example1cg" id="description" style={{ color: 'red' }} ></label>
                </div>
                <div className="text-center">
                    <button onClick={(e) => save(e)} className="btn btn-primary mt-3">Save</button>
                </div>

            </div>

        </div>

        <div className="continer-fluid" >
            <div className="text-center " style={{ height: "5vh" }}>
                <h4 className="mt-4">Extra Curricular Activities</h4>
            </div>

            <div className="form p-4">

                <div class="form-group shadow-textarea  ">
                    <p className="fs-5 border-bottom ">Add </p>
                    <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." onChange={(event)=>setExtra(event.target.value)}></textarea>
                </div>
                <div className="text-center">
                    <button onClick={save} className="btn btn-primary mt-3">Save</button>
                </div>
               
                
            </div>





        </div>

        <div>
       <div className="continer-fluid" >
            <div className="text-center " style={{ height: "5vh" }}>
                <h4 className="mt-4">Skills</h4>
            </div>

            <div className="form p-4">

                <div class="form-group shadow-textarea  ">
                    <p className="fs-5 border-bottom ">Add Skills</p>
                    <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." onChange={(event)=>setSkills(event.target.value)}></textarea>
                </div>
                <div className="text-center">
                    <button onClick={save} className="btn btn-primary mt-3">Save</button>
                </div>
               
                
            </div>





        </div>
    </div>


        </div>
    )
}

function validate() {

    var name =
        document.getElementById("vname").value;

    var email =
        document.getElementById("vemail").value;

    var contact =
        document.getElementById("vphone").value;

    var city =
        document.getElementById("city").value;


    var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regContact = /^[789][0-9]{9}$/;


    var msg = document.getElementById("name");
    if (name === "" || !regName.test(name)) {
        msg.innerHTML = " *Please enter a valid name";
        return false;
    }
    msg.innerHTML = "";

    msg = document.getElementById("phone");
    if (contact === "" || !regContact.test(contact)) {
        msg.innerHTML = " *Please enter a valid phone number";
        return false;
    }
    msg.innerHTML = "";

    msg = document.getElementById("location");
    if (city === "" || !regName.test(city)) {
        msg.innerHTML = " *Please enter a valid name";
        return false;
    }
    msg.innerHTML = "";

    msg = document.getElementById("email");
    if (email === "" || !regEmail.test(email)) {
        msg.innerHTML = " *Please enter a valid email";
        return false;
    }

   

    return true;
}
