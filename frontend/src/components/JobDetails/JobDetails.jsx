import React from "react";
import { useParams } from "react-router-dom";
import { jobRole } from "../HomePage/HomePage";
import Card from "react-bootstrap/Card";


const JobDetails = () => {
 const { id } = useParams();
 const selectedJob = jobRole.find((job) => job.id === parseInt(id));

 if (!selectedJob) {
  return <div>Job not found.</div>;
 }

 return (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
   <div style={{ width: "30rem" }}>
    <Card style={{ width: "100%" }}>
     <Card.Header><h3>{selectedJob.Company}</h3></Card.Header>
     {/* <Card.Header>{selectedJob.Company}</Card.Header> */}
     {/* <Card.Img variant="top" src={selectedJob.image} /> */}
     <Card.Body>
      <Card.Title>{selectedJob.Role}</Card.Title>
      <Card.Text>
       <h5>{selectedJob.Description}</h5>
       <h6>{selectedJob.Location}</h6>
       <h6>{selectedJob.jobType}</h6>
       <h6>{selectedJob.salary}</h6>
       <h6>{selectedJob.LDate}</h6>
      </Card.Text>
     </Card.Body>
    </Card>
   </div>
  </div>
 );
};

export default JobDetails;