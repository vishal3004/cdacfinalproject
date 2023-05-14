import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Css/registerCss.css";
import emailjs from '@emailjs/browser';


export default function Register() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        clgName: "",
        clgPan: "",
        clgUid: "",
        email: "",
        phone: "",
        placementOfficer: "",
        regDate: "",
        username: "",
        password: ""
    });
    const [isModalOpened, setIsModalOpened] = useState(false);


    const openModal = () => {
        setIsModalOpened(true);
    }
    const closeModal = () => {
        setIsModalOpened(false);
    }

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            let usernameid = ("inst" + user.clgUid.substring(0, 3) + user.clgName.substring(0, 4) + user.clgPan.substring(0, 3));
            user.username = usernameid.split(" ").join("");
            let passwordid = user.placementOfficer.substring(0, 4) + Math.floor((Math.random() * 1000) + 1) + "@" + user.phone.substring(0, 3);
            user.password = passwordid.split(" ").join("");


            const res = await axios.post("http://localhost:8080/institute_user", user);
            if (res.status === 200) {
                console.log(user);
                console.log("success");

                emailjs.send("service_bbfw5tz", "template_vxo34en",
                    {
                        username: user.username,
                        password: user.password,
                        placementOfficer: user.placementOfficer,
                        email: user.email
                    },
                    "7x0P7whAnFJlF88Ts"
                ).then(
                    res => {
                        console.log(res);
                    }
                ).catch(err => console.log(err));

                openModal();
                setUser({
                    clgName: "",
                    clgPan: "",
                    clgUid: "",
                    email: "",
                    phone: "",
                    placementOfficer: "",
                    regDate: "",
                    username: "",
                    password: ""
                })


            }
        }
    };

    return (
        <div>
            <div className="form-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="form-container">
                                <h3 className="title">Institute Register</h3>
                                <form className="form-horizontal" name="myform" onSubmit={(e) => onSubmit(e)}>
                                    <input type="hidden" id="custId13" name="username" onChange={(e) => onInputChange(e)} value={user.username} />
                                    <input type="hidden" id="custId2" name="password" onChange={(e) => onInputChange(e)} value={user.password} />
                                    <div className="form-group">
                                        <label>Institute Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="clgName"
                                            id="form3Example1"
                                            value={user.clgName}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="User Name"
                                            required
                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="clgName" style={{ color: 'red' }} ></label>
                                    </div>
                                    <div className="form-group">
                                        <label>Institute UID</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="clgUid"
                                            value={user.clgUid}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="Institute UID"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Institute PAN Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="clgPan"
                                            value={user.clgPan}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="Institute PAN Number"
                                            
                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="clgPan" style={{ color: 'red' }} ></label>
                                    </div>
                                    <div className="form-group">
                                        <label>Institute Register Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="regDate"
                                            value={user.regDate}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="Date"
                                            required
                                        />

                                    </div>
                                    <h4 className="sub-title">Personal Information</h4>
                                    <div className="form-group">
                                        <label>Placement Officer Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="placementOfficer"
                                            value={user.placementOfficer}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="Placement Officer Name"
                                            

                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="placementOfficer" style={{ color: 'red' }} ></label>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone No.</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={user.phone}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="Phone Number"
                                            
                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="phone" style={{ color: 'red' }} ></label>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={user.email}
                                            onChange={(e) => onInputChange(e)}
                                            placeholder="Email"
                                            
                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="email" style={{ color: 'red' }} ></label>
                                    </div>
                                    <button className="btn signup">Create Account</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <Modal size="xxl" aria-labelledby="contained-modal-title-vcenter"
                        centered show={isModalOpened} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">Application form Sumbitted!!!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Now Go For The Email and Check Your Login Credentials</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={closeModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

function validate() {

    var clgName =
        document.forms.myform.clgName.value;

    var clgPan =
        document.forms.myform.clgPan.value;

    var placementOfficer =
        document.forms.myform.placementOfficer.value;

    var phone =
        document.forms.myform.phone.value;

    var email =
        document.forms.myform.email.value;


    var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;


    var msg = document.getElementById("clgName");
    if (clgName == "" || !regName.test(clgName)) {
        msg.innerHTML = " *Please enter a valid name";
        return false;
    }
    msg.innerHTML = "";

    msg = document.getElementById("clgPan");
    if (clgPan == "") {
        msg.innerHTML = " *Please enter a valid college pan";
        return false;
    }
    msg.innerHTML = "";

    var msg = document.getElementById("placementOfficer");
    if (placementOfficer == "" || !regName.test(placementOfficer)) {
        msg.innerHTML = " *Please enter a valid name";
        return false;
    }
    msg.innerHTML = "";


    msg = document.getElementById("phone");
    if (phone == "" || !regPhone.test(phone)) {
        msg.innerHTML = " *Please enter a valid phone number";
        return false;
    }
    msg.innerHTML = "";

    msg = document.getElementById("email");
    if (email == "" || !regEmail.test(email)) {
        msg.innerHTML = " *Please enter a valid email";
        return false;
    }
    msg.innerHTML = "";

    return true;
}
