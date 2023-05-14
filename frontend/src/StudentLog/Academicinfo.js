import "../Css/studentresume.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
export default function Academicinfo() {
 

  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    if (student == null) {
        navigate("/");
    }
}, []);

const [Specs, setSpecs] = useState("");
const [Institute, setInstitute] = useState("");
const [passyear, setpassyear] = useState("");
const [marksobt, setmarksobt] = useState("");
const [percentage, setpercentage] = useState("");
const [totmarks, settotmarks] = useState("");
const [cgpa, setcgpa] = useState("");
const [qualification, setQualification] = useState("");
// const id = useParams();

  const [isModalOpened, setIsModalOpened] = useState(false);
  
    const openModal = () => {
      setIsModalOpened(true);
    };
    const closeModal = () => {
      setIsModalOpened(false);
    };


  const save = async function (e) {
    e.preventDefault();
    // if(validate()){
      var data = {
        studentId:student.studentId,
        studentRollNo: student.studentRollNo,
        academicDetailsList: 
          {
            specialization: Specs,
            institute: Institute,
            passingYear: passyear,
            obtainedMarks: marksobt,
            percentage: percentage,
            totalMarks: totmarks,
            cgpa: cgpa,
            qualification: qualification,
        },
        
      };
     console.log(data);
      const res = await axios.put("http://localhost:8080/student", data);
      if (res.status === 200) {
        openModal();
        console.log("success");
      }
    // }
   
  };

  return (
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
  );
}

function validate() {
  // var qualification = document.getElementById("vqualification").value;

  var specialization = document.getElementById("vspecialization").value;

  var institute = document.getElementById("vinst").value;

  var passingYear = document.getElementById("vpassingYear").value;

  var obtainedMarks = document.getElementById("vobtainedMarks").value;

  var totalMarks = document.getElementById("vtotal").value;

  var percentage = document.getElementById("vpercentage").value;

  var cgpa = document.getElementById("vcgpa").value;

  var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
  var regContact = /^[0-9]+$/;

  // var msg = document.getElementById("qualification");
  // if (qualification === "" || !regName.test(qualification)) {
  //   msg.innerHTML = " *Please enter a valid qualification value";
  //   return false;
  // }
  // msg.innerHTML = "";

  var msg = document.getElementById("specialization");
  if (specialization === "" || !regName.test(specialization)) {
    msg.innerHTML = " *Please enter a valid specialization value";
    return false;
  }
  msg.innerHTML = "";

  var msg = document.getElementById("inst");
  if (institute === "" || !regName.test(institute)) {
    msg.innerHTML = " *Please enter a valid institute value";
    return false;
  }
  msg.innerHTML = "";


  msg = document.getElementById("passingYear");
  if (passingYear === "" || !regContact.test(passingYear)) {
    msg.innerHTML = " *Please enter a valid year";
    return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("obtainedMarks");
  if (obtainedMarks === "" || !regContact.test(obtainedMarks)) {
    msg.innerHTML = " *Please enter a valid obtainedMarks";
    return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("totalMarks");
  if (totalMarks === "" || !regContact.test(totalMarks)) {
    msg.innerHTML = " *Please enter a valid totalMarks";
    return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("percentage");
  if (percentage === "" || !regContact.test(percentage)) {
    msg.innerHTML = " *Please enter a valid percentage";
    return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("cgpa");
  if (cgpa === "" || !regContact.test(cgpa)) {
    msg.innerHTML = " *Please enter a valid percentage";
    return false;
  }


  return true;
}
