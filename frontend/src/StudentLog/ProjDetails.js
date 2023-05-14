import "../Css/studentresume.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function ProjDetails() {
    const [Projtitle, setProjtitle] = useState("")
    const [pduration, setPduration] = useState("")
    const [pdate, setPdate] = useState("")
    const [pdescription, setPdescription] = useState("")
    const [pplatform, setPplatform] = useState("")

    const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    if (student == null) {
        navigate("/");
    }
}, []);

    const save = async function (e) {
        e.preventDefault();
        if(validate()){
            var data =
            
            {
                studentId: student.studentId,
                projectDetailsList: 
                [
                    {
                title: Projtitle,
                duration: pduration,
                date: pdate,
                description: pdescription,
                platform:pplatform
                    }
                ]
        
        
            }
            console.log(data)
        const res = await axios.put("http://localhost:8080/student", data);
        if(res.status===200) {
           
            console.log("success");
        }
      
        }
        
    }

    


    return (
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




    )
}

function validate() {

    var title =
        document.getElementById("vtitle").value;

    var platform =
        document.getElementById("vplatform").value;

    var duration =
        document.getElementById("vduration").value;

    var description =
        document.getElementById("description").value;


    var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regContact = /^\d{10}$/;


    var msg = document.getElementById("title");
    if (title === "" || !regName.test(title)) {
        msg.innerHTML = " *Please enter a valid name";
        return false;
    }
    msg.innerHTML = "";

    // msg = document.getElementById("duration");
    // if (duration === "" || !regContact.test(duration)) {
    //     msg.innerHTML = " *Please enter a valid phone number";
    //     return false;
    // }
    // msg.innerHTML = "";

    msg = document.getElementById("description");
    if (description === "") {
        msg.innerHTML = " *Please enter a valid description";
        return false;
    }
    msg.innerHTML = "";

    // msg = document.getElementById("platform");
    // if (platform === "" || !regEmail.test(platform)) {
    //     msg.innerHTML = " *Please enter a valid platform";
    //     return false;
    // }

   

    return true;
}

export default ProjDetails;