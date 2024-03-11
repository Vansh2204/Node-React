import { useEffect, useState } from "react"

export function Homepage() {

    return (
        <>
            
            <div class="jumbotron">
                <div class="container">
                    <h1>Job Application Webpage</h1>
                    <p>Just a page with created with NodeAPI and ReactJS</p>

                </div>
            </div>
            <section class="feature bg-transparent">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" class="img-fluid rounded-circle mb-3" alt="Feature 1" width={"225px"} />
                            <h3>Node API</h3>
                            <p>
                                A Node.js API (Application Programming Interface) typically refers to a server-side application built with Node.js that exposes endpoints for clients to interact with. These endpoints can handle various HTTP methods (such as GET, POST, PUT, DELETE) to perform operations like fetching data, creating resources, updating information, and deleting data</p>
                        </div>
                        <div class="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5d9a1dlKN6uIr9yawVly55Q2YJw9w9ck2RQOAIHSk8hNPMBWrpxKHkF1Y0CsPdS9Tvs&usqp=CAU" class="img-fluid rounded-circle mb-3" alt="Feature 2" />
                            <h3>MongoDB Database</h3>
                            <p>MongoDB is a versatile and feature-rich database that is well-suited for a wide range of applications, including web and mobile applications, content management systems, real-time analytics, and more. Its flexible data model, scalability, and performance make it a popular choice for modern applications that require dynamic and evolving data structures</p>
                        </div>
                        <div class="col-md-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png" class="img-fluid rounded-circle mb-3" alt="Feature 3" width={"245px"} />
                            <h3>React JS</h3>
                            <p>React's component-based architecture, virtual DOM, declarative syntax, and rich ecosystem make it a powerful and flexible library for building modern web applications with dynamic and interactive user interfaces.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}