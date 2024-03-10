import { Link } from "react-router-dom";

const { useState, useEffect } = require("react");

export function Employee() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/employees").then((res) => res.json()).then((res) => setdata(res))
    })

    const formattedemployee = data.map((d) => {

        return (
            <>
                <div class="container-fluid mt-3 me-3  ">
                    <div class="col-3 float-left p-3 ">
                        <div class="card  border border-dark h-100" >
                            <div class="card-body bg-dark">
                                <h5 class="card-title " style={{ color: "white" }}>{d.ApplicationName}</h5>
                                <p class="card-text" style={{ color: "white" }}>{d.PositionAppliedFor}</p>
                                <p class="card-text" style={{ color: "white" }}>{d.ApplicationDate}</p>
                                <p class="card-text" style={{ color: "white" }}>{d.Status}</p>
                                <Link to={"../employee/" + d._id}>

                                    <a href="#" class="btn btn-primary">View Porfile</a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return formattedemployee;
}

