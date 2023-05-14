import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/createstudent.css"
import emailjs from '@emailjs/browser';
import SideNavBar from "./SideNavbar";
import { Button, Modal } from "react-bootstrap";

export default function CreateStudent() {
    useEffect(() => {
        if (institute == null) {
            navigate("/");
        }
    }, []);

    let navigate = useNavigate();
    const form = useRef();
    const institute = JSON.parse(localStorage.getItem("institute"));
    const [user, setUser] = useState({

        name: "",
        studentRollNo: "",
        location: "",
        email: "",
        phone: "",
        birthDate: "",
        username: "",
        instituteName: institute.clgName,
        password: ""
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
                "std" +
                user.email.substring(0, 3) +
                user.name.substring(0, 4) +
                user.phone.substring(0, 3);
            user.username = usernameid.split(" ").join("");
            let passwordid = user.name.substring(0, 4) + Math.floor((Math.random() * 1000) + 1) + "@" + user.phone.substring(0, 3);
            user.password = passwordid.split(" ").join("");


            const res = await axios.post("http://localhost:8080/student", user);

            //const addInst = await axios.put("http://localhost:8080/institute_user",user);
            console.log(user);

            if (res.status === 200) {
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
                    name: "",
                    studentRollNo: "",
                    location: "",
                    email: "",
                    phone: "",
                    birthDate: "",

                    username: "",
                    password: ""
                });
            }
        }
    };
    return (
        <div>
            <SideNavBar />
            <div className="container rounded bg-white mt-5 mb-5">
                <form onSubmit={(e) => onSubmit(e)} name="myform">
                    <div className="row">

                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img
                                    className="rounded-circle mt-5"
                                    width="150px"
                                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                />
                                <span className="font-weight-bold">Create Student Profile</span>

                                <span> </span>
                            </div>
                        </div>

                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Student Profile</h4>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label className="labels">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            name="name"
                                            value={user.name}
                                            onChange={(e) => onInputChange(e)}


                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="name" style={{ color: 'red' }} ></label>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">Registration Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Registration Number"
                                            name="studentRollNo"
                                            onChange={(e) => onInputChange(e)}
                                            value={user.studentRollNo}
                                            required

                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="labels">Institute Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Institute Name"
                                            name="instituteName"
                                            defaultValue={user.instituteName}
                                            disabled


                                        />

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label className="labels">Mobile Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone number"
                                            name="phone"
                                            onChange={(e) => onInputChange(e)}
                                            value={user.phone}


                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="phone" style={{ color: 'red' }} ></label>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Location"
                                            name="location"
                                            onChange={(e) => onInputChange(e)}
                                            value={user.location}


                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="location" style={{ color: 'red' }} ></label>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">Birth Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Birth Date"
                                            name="birthDate"
                                            onChange={(e) => onInputChange(e)}
                                            value={user.birthDate}
                                            required


                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">Email ID</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="enter email id"
                                            name="email"
                                            onChange={(e) => onInputChange(e)}
                                            value={user.email}


                                        />
                                        <label className="form-label" htmlFor="form3Example1cg" id="email" style={{ color: 'red' }} ></label>
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <button
                                        className="btn btn-primary profile-button"
                                        type="submit"
                                    >
                                        Save Profile
                                    </button>
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
                </form>
            </div>
        </div>
    );
}

function validate() {

    var name =
        document.forms.myform.name.value;

    var phone =
        document.forms.myform.phone.value;

    var location =
        document.forms.myform.location.value;

    var email =
        document.forms.myform.email.value;


    var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;


    var msg = document.getElementById("name");
    if (name == "" || !regName.test(name)) {
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

    msg = document.getElementById("location");
    if (location == "" || !regName.test(location)) {
        msg.innerHTML = " *Please enter a valid location";
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
