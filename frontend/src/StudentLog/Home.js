import "../Css/studentresume.css"
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function HomeResume() {

    const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    if (student == null) {
        navigate("/");
    }
}, []);

    return (
        <div className="Wrapper " >
            <div className="row">
                <div className="col-3 sidebar" >
                    <nav className="nav flex-column mt-5 ms-3">
                        <Link class="nav-link sidebar-menu" to="/createresume/Personaldetail">
                            <span class="material-symbols-rounded me-3">
                                edit_note
                            </span>
                            <span className="align-top">Create Resume</span>
                        </Link>

                        <div style={{ height: "30vh" }}></div>
                        <Link className="nav-link sidebar-menu" to="/studenthome">
                            <span class="material-symbols-outlined me-3">
                                logout
                            </span>
                            <span className="align-top">Home</span>
                        </Link>

                    </nav>
                </div>
                <div className="col-9">
                    <Outlet />

                </div>
            </div>
        </div>


    )
}

export default HomeResume