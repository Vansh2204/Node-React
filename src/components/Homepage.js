import { useEffect, useState } from "react"

export function Homepage() {

    return (
        <>
            {/* <div class="container">
            <h1 style={{color:"white"}}>Job Application</h1>
            <p style={{color:"white"}}>Our  website is a cutting-edge platform designed to streamline the recruitment process for both employers and job seekers. With a user-friendly interface and powerful features, our website revolutionizes the way individuals find and apply for jobs. For job seekers, our platform offers a comprehensive database of job listings spanning various industries and locations, making it easy to discover opportunities that align with their skills and career aspirations. Our advanced search and filtering options allow users to narrow down their options quickly, while personalized recommendations ensure that they never miss out on relevant opportunities.</p>
            <p style={{color:"white"}}>Employers benefit from our website's innovative tools for posting job openings, managing applications, and evaluating candidates. Our intuitive dashboard provides a centralized hub for tracking applicant progress, communicating with candidates, and collaborating with hiring teams. Additionally, our website offers advanced analytics and reporting features that enable employers to gain valuable insights into their recruitment efforts, helping them make data-driven decisions to optimize their hiring processes.</p>
            <p style={{color:"white"}}>Overall, our job application website empowers both employers and job seekers with the tools they need to succeed in today's competitive job market. Whether you're looking to land your dream job or find the perfect candidate to fill a position, our platform offers unparalleled convenience, efficiency, and effectiveness in connecting talent with opportunities.</p>
            <p style={{color:"white"}}>For job seekers, our website serves as a dynamic marketplace of opportunities, where they can explore a diverse array of job listings tailored to their preferences and qualifications. Our intuitive interface enables effortless navigation, allowing users to swiftly discover, save, and apply to relevant positions with just a few clicks. Moreover, our platform provides invaluable resources such as resume builders, interview preparation guides, and career advice articles, empowering candidates to showcase their best selves and stand out in a competitive job market.</p>
            <p style={{color:"white"}}>On the employer side, our job application website offers a comprehensive suite of tools to streamline recruitment efforts and attract top talent. Employers can easily create and customize job postings, reaching a wide pool of qualified candidates through our extensive network and targeted advertising options. Our applicant tracking system simplifies the screening and selection process, enabling recruiters to efficiently manage applications, schedule interviews, and collaborate with hiring teams in real-time. With built-in analytics and reporting functionalities, employers gain valuable insights into the effectiveness of their recruitment strategies, allowing for continuous improvement and optimization</p>
            <p style={{color:"white"}}>In essence, our website represents more than just a platform—it's a catalyst for career advancement and organizational growth. By fostering meaningful connections between talent and opportunity, we empower individuals and businesses alike to thrive in an ever-evolving employment landscape. Whether you're embarking on a job search journey or seeking to expand your team, our website is your ultimate partner in achieving success.</p>
            </div> */}
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