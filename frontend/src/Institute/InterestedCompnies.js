import React from 'react'
import SideNavBar from './SideNavbar'

export default function InterestedCompnies() {
  return (
    <div>
      <div>
        <div>
  <SideNavBar/>
  <div className="bg-body mt-5 container"><h3>Posted jobs</h3></div>
</div>

<div className="container mt-5 px-2">
  <div className="mb-2 d-flex justify-content-between align-items-center">
    <div className="position-relative mb-3">
      <span className="position-absolute search"><i className="fa fa-search" /></span>
      <input className="form-control w-100" placeholder="Search by order#, name..." />
    </div>
  </div>
  <div className="table-responsive">
    <table className="table table-responsive table-borderless">
      <thead>
        <tr className="bg-light">
          <th scope="col" width="10%">Sr</th>
          <th scope="col" width="20%">Job Title</th>
          <th scope="col" width="20%">Company Name</th>
          <th scope="col" width="25%">Schedule Date And Time</th>
          <th scope="col" width="25%">Status</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Java Backend Developer</td>
          <td>Althan Travis LTD</td>
            <td>22-feb-2023</td>
            <td><span className="fw-bolder text-dark">Accepted</span></td>
        </tr>
        
        <tr>
          <td>1</td>
          <td>Java Backend Developer</td>
          <td>Althan Travis LTD</td>
          <td>22-feb-2023</td>
            <td><span className="fw-bolder text-dark">Accepted</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
    </div>
  )
}
