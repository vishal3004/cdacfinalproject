import { useState } from "react"

export default function ExtraActivities() {

    const[Objective,setObjective]=useState("");
    const[Achievement,setAchievement]=useState("");
    const[Certification,setCertification]=useState("");
    const[Intership,setIntership]=useState("");

    const[extra, setExtra] = useState();

    function save()
    {
        console.log(extra)
    }
    return (
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
    )
}