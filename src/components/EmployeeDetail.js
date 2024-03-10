import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function EmployeeDetail() {

    let params = useParams();
    const navigate = useNavigate();
    const [data, setdata] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/employees" + "/" + params.id,
            {
                method: "GET",
            }
        ).then(
            (res) => { return res.json(); })
            .then((res) => { setdata(res) });
    }, []);

    return (
        <>
            <div class="container mt-3 ">
                <div class="col p-3">

                    <div class="custom-container-body bg-dark border border-dark">
                        <p style={{ color: "grey" }}> Name:<h5 class="title " style={{ color: "white" }}>{data.ApplicationName}</h5></p>
                        <p style={{ color: "grey" }}>Applied For: <p class="text" style={{ color: "white" }}>{data.PositionAppliedFor}</p></p>
                        <p style={{ color: "grey" }}>Date: <p class="text" style={{ color: "white" }}>{data.ApplicationDate}</p></p>
                        <p style={{ color: "grey" }}>Status: <p class="text" style={{ color: "white" }}>{data.Status}</p></p>
                        <p class="text" style={{ color: "white" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    </div>
                </div>
            </div>
            <div class="container" style={{ alignItems: "center" }}>
                <div class="row justify-content-center">

                    {/* <button
                        className="btn-danger text-center" onClick={() => { fetch("http://localhost:5000/employees" + "/" + params.id, { method: "DELETE" }).then((res) => { navigate("/employee"); }); }}>Delete
                    </button> */}
                    <div class="p-1">
                        <a href="#" class="btn btn-danger" onClick={() => { fetch("http://localhost:5000/employees" + "/" + params.id, { method: "DELETE" }).then((res) => { navigate("/employee"); }); }}>Delete Application</a>
                    </div>
                    {/* <button className="btn-warning" onClick={() => { navigate("/employee/edit/" + params.id); }}>Edit</button> */}
                    <div class="p-1">
                        <a href="#" class="btn btn-warning" onClick={() => { navigate("/employee/edit/" + params.id); }}>Edit Application</a>
                    </div>
                </div>
            </div>
        </>
    )
}