import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Css/registerCss.css";
import emailjs from "@emailjs/browser";

export default function RecuiterReg() {
  let navigate = useNavigate();
  const form = useRef();
  const [user, setUser] = useState({
    companyName: "",
    companyId: "",
    city: "",
    email: "",
    phone: "",
    position: "",
    regDate: "",
    username: "",
    recruiterName: "",
    password: "",
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
    
    if (validate()) {
        let usernameid =
            "recr" +
            user.companyId.substring(0, 3) +
            user.companyName.substring(0, 4) +
            user.phone.substring(0, 3);
        user.username = usernameid.split(" ").join("");
        let passwordid = user.companyName.substring(0, 4) + Math.floor((Math.random() * 1000) + 1) + "@" + user.phone.substring(0, 3);
        user.password = passwordid.split(" ").join("");

        const res = await axios.post("http://localhost:8080/recruiter_user", user);

        if (res.status === 200) {
            console.log(user);
            console.log("success");
            emailjs.send("service_bbfw5tz", "template_vxo34en", {
                username: user.username,
                password: user.password,
                recruiterName: user.recruiterName,
                email: user.email
            }, "7x0P7whAnFJlF88Ts")
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            openModal();
            setUser({
                companyName: "",
                companyId: "",
                city: "",
                email: "",
                phone: "",
                position: "",
                regDate: "",
                username: "",
                recruiterName: "",
                password: ""
            });
        }
    }
  };

  return (
    <div>
      <div>
        <div className="form-bg">
          <div className="container">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="form-container">
                  <h3 className="title">Recruiter Register</h3>

                  <form
                    className="form-horizontal"
                    name="myform"
                    ref={form}
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div className="form-group">
                      <input
                        type="hidden"
                        name="username"
                        onChange={(e) => onInputChange(e)}
                        value={user.username}
                      />
                      <input
                        type="hidden"
                        name="password"
                        onChange={(e) => onInputChange(e)}
                        value={user.password}
                      />
                      <label>Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyName"
                        id="company"
                        onChange={(e) => onInputChange(e)}
                        value={user.companyName}
                        placeholder="Company Name"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example1cg"
                        id="companyName"
                        style={{ color: "red" }}
                      ></label>
                    </div>
                    <div className="form-group">
                      <label>Company Id</label>
                      <input
                        type="number"
                        className="form-control"
                        name="companyId"
                        value={user.companyId}
                        onChange={(e) => onInputChange(e)}
                        placeholder="Company Id"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Register Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="regDate"
                        value={user.regDate}
                        onChange={(e) => onInputChange(e)}
                        placeholder="Company Register Date"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        id="cityid"
                        value={user.city}
                        onChange={(e) => onInputChange(e)}
                        placeholder="City"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example1cg"
                        id="city"
                        style={{ color: "red" }}
                      ></label>
                    </div>

                    <h4 className="sub-title">Personal Information</h4>
                    <div className="form-group">
                      <label>Recruiter Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="recruiterName"
                        id="recruiterNameid"
                        value={user.recruiterName}
                        onChange={(e) => onInputChange(e)}
                        placeholder="Recruiter Name"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example1cg"
                        id="recruiterName"
                        style={{ color: "red" }}
                      ></label>
                    </div>
                    <div className="form-group">
                      <label>Position</label>
                      <input
                        type="text"
                        name="position"
                        id="vposition"
                        value={user.position}
                        className="form-control"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Position"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example1cg"
                        id="position"
                        style={{ color: "red" }}
                      ></label>
                    </div>

                    <div className="form-group">
                      <label>Email ID</label>
                      <input
                        type="email"
                        name="email"
                        id="vemail"
                        value={user.email}
                        className="form-control"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Email Address"
                        
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example1cg"
                        id="email1"
                        style={{ color: "red" }}
                      ></label>
                    </div>
                    <div className="form-group">
                      <label>Phone No.</label>
                      <input
                        type="text"
                        name="phone"
                        id="vphone"
                        value={user.phone}
                        className="form-control"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Phone Number"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example1cg"
                        id="phone1"
                        style={{ color: "red" }}
                      ></label>
                    </div>

                    
                    <button className="btn signup">Create Account</button>
                  </form>
                </div>
              </div>
              <Modal
                size="lg"
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={isModalOpened}
                onHide={closeModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Application form Sumbitted!!!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Now Go To Email and check Your UserName and Password{" "}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={closeModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function validate() {
  var companyName = document.getElementById("company").value;

  
  // var companyId =
  //     document.forms.myform.companyId.value;

  // var regDate =
  //     document.forms.myform.regDate.value;

  var city = document.getElementById("cityid").value;

  var recruiterName = document.getElementById("recruiterNameid").value; 

  var position = document.getElementById("vposition").value; 

  var email =document.getElementById("vemail").value; 


  let phone = document.getElementById("vphone").value; 


  var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regContact = /^\d{10}$/;

  var msg = document.getElementById("companyName");
  if (companyName == "" || !regName.test(companyName)) {
    msg.innerHTML = " *Please enter a valid name";
    return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("city");
  if (city == "" || !regName.test(city)) {
    msg.innerHTML = " *Please enter a valid city";
    return false;
  }
  msg.innerHTML = "";

  var msg = document.getElementById("recruiterName");
  if (recruiterName == "" || !regName.test(recruiterName)) {
    msg.innerHTML = " *Please enter a valid name";
    return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("position");
  if (position == "" || !regName.test(position)) {
    msg.innerHTML = " *Please enter a valid position";
    return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("email1");
  if (email == "" || !regEmail.test(email)) {
    msg.innerHTML = " *Please enter a valid email";
    return false;
  }
  msg.innerHTML = "";

  var msg1 = document.getElementById("phone1");
  if (phone == "" || !regContact.test(phone)) {
    msg1.innerHTML = " *Please enter a valid phone number";
    return false;
  }
  msg1.innerHTML = "";

  return true;
}
