import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function EmployeeAdd() {

    const navigate = useNavigate();
    const params = useParams();

    const [employee, setemployee] = useState({});

    useEffect(() => {

        if (params.id > 0) {
            fetch(
                " http://localhost:5000/employees" + params.id,
                {
                    method: "GET",
                }
            )
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    setemployee(res);
                })
        }
    }, [])

    return (
        <>
            <div class="container border border-dark mt-3" style={{ backgroundColor: "black" }}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ color: "black" }}><span class="badge text-bg-secondary">Application Name <span class="text" style={{ color: "red" }}>*</span></span></label>
                    <input type="text" value={employee.ApplicationName} class="form-control " id="exampleFormControlInput1" placeholder="Name" onChange={(e) => { setemployee({ ...employee, ApplicationName: e.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ color: "black" }}><span class="badge text-bg-secondary">Position Applied For <span class="text" style={{ color: "red" }}>*</span></span></label>
                    <input type="text" value={employee.PositionAppliedFor} class="form-control " id="exampleFormControlInput1" placeholder="Position" onChange={(e) => { setemployee({ ...employee, PositionAppliedFor: e.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ color: "black" }}><span class="badge text-bg-secondary">Application Date <span class="text" style={{ color: "red" }}>*</span></span></label>
                    <input type="text" value={employee.ApplicationDate} class="form-control " id="exampleFormControlInput1" placeholder="YY-MM-DD" onChange={(e) => { setemployee({ ...employee, ApplicationDate: e.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label " style={{ color: "black" }}><span class="badge text-bg-secondary">Status <span class="text" style={{ color: "red" }}>*</span> </span></label>
                    <input type="text" value={employee.Status} class="form-control " id="exampleFormControlInput1" placeholder="Status" onChange={(e) => { setemployee({ ...employee, Status: e.target.value }) }} />
                </div>
            </div>



            <div class="container" style={{ alignItems: "center" }}>
                <div class="row justify-content-center">
                    <div class="p-1">
                        <a href="#" class="btn btn-light mt-3" onClick={() => {
                            if (params.id > 0) {
                                fetch(
                                    "http://localhost:5000/employees" +
                                    "/" +
                                    params.id,
                                    {
                                        method: "PUT",
                                        body: JSON.stringify(employee),
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    }
                                ).then(() => {
                                    navigate("/employee");
                                });
                            } else {
                                fetch(
                                    "http://localhost:5000/employees",
                                    {
                                        method: "POST",
                                        body: JSON.stringify(employee),
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    }
                                ).then(() => {
                                    navigate("/employee");
                                });
                            }
                        }}> {params.id > 0 && "Edit"}
                            {!(params.id > 0) && "Add "}
                            Applicant</a>
                    </div>

                </div>
            </div>

        </>
    )
}
