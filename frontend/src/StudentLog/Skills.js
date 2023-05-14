import React, { useState } from 'react'

export default function Skills() {

  const [skills , setSkills] = useState();
  function save()
  {
      console.log(skills)
  }
  return (
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
  )
}
