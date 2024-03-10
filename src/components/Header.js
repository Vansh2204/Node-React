import { Link, Outlet } from "react-router-dom";

export function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div class="container-fluid">
                    <i class="bi-briefcase" style={{ color: "white", fontSize: "1.7em" }}></i> &nbsp;&nbsp;&nbsp;
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class=" nav-link active" aria-current="page" href="#"><Link to="./" className="text-decoration-none" style={{ color: "white" }}>Home</Link></a>
                            <a class="nav-link" href="#"><Link to="./employee" className="text-decoration-none" style={{ color: "white" }}>Applications</Link></a>
                            <a class="nav-link" href="#"> <Link to="/employee/add" className="text-decoration-none" style={{ color: "white" }}> Add Application</Link>{" "} </a>

                        </div>
                    </div>

                </div>
            </nav>
            <Outlet />

            {/* <footer
                class="text-center text-lg-start text-white fixed-bottom bg-dark"
                style={{ zIndex: 1000, height: "40px", bottom: "0px" }}
            >
                <div class="text-center pt-2    " style={{ color: "white" }}>
                    © 2024 :

                    {" "}
                    React/Vansh

                </div>
            </footer> */}

        </>
    )
}