import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../Css/jobview.css"

export default function ClgView(props) {
    const [clgItem, setClgItem] = useState({});

  //const { id } = useParams();
  const id = props.id;

  useEffect(() => {
    loadJob(id);
    console.log(id +" id");
  }, []);

  

  const loadJob = async (id) => {
    const result = await axios.get(`http://localhost:8080/institute_user/${id}`);
    setClgItem(result.data);
    console.log(result.data);
    console.log(clgItem);
  };
    
  return (
    <div>
      <div className="form-bg">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="form-container">
                <h3 className="title">Institute Details</h3>
                <form className="form-horizontal">
               
                  <div className="form-group">
                    <label>Institute Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="clgName"
                      id="form3Example1"
                      value={clgItem.clgName}
                      disabled
                      placeholder="User Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Institute UID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="clgUid"
                      value={clgItem.clgUid}
                      disabled
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
                      value={clgItem.clgPan}
                      disabled
                      placeholder="Institute PAN Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Institute Register Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="regDate"
                      value={clgItem.regDate}
                      disabled
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
                      value={clgItem.placementOfficer}
                      disabled
                      placeholder="Placement Officer Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={clgItem.phone}
                      disabled
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={clgItem.email}
                      disabled
                      placeholder="Email"
                      required
                    />
                  </div>   
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
