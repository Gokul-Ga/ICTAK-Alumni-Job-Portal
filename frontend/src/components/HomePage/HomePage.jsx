import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./HomePage.css"
import Footer from "../Footer/Footer";

export const jobRole=[
 {
  id:1,
  Role:"React Developer",
  Description:"Minimum 3 years of Experience",
  Location:"Location:Kerala",
  image:"https://tse2.mm.bing.net/th?id=OIP.6tUx71iRhHQkuNd2jTXaSQHaE_&pid=ImgDet&rs=1",
  Company:"Company:Tech Mahindra",
  salary:"Salary:30000",
  jobType:"Jobtype:Developer",
  qualification:"Qualification:B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:2,
  Role:"Full Stack Developer",
  Description:"Minimum 4 years of Experience",
  Location:"Location:Kerala",
  image:"https://th.bing.com/th/id/OIP.TCSkGnIfl1fIQieMpI1RVAAAAA?pid=ImgDet&rs=1",
  Company:"LTIMindtree",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:3,
  Role:"Angular Developer",
  Description:"Minimum 3 years of Experience",
  Location:"Location:Kerala",
  image:"https://www.onblastblog.com/wp-content/uploads/2019/09/09aea00fc018749c1c255ddfd594b218.jpeg",
  Company:"Tata Consultancy Service",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:4,
  Role:"Java Developer",
  Description:"Minimum 4 years of Experience",
  Location:"Location:Kerala",
  image:"https://mediafeed.org/wp-content/uploads/2020/11/iStock-1163541557.original.jpg",
  Company:"Wipro",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:5,
  Role:"Python Developer",
  Description:"Minimum 2 years of Experience",
  Location:"Location:Kerala",
  image:"https://tse2.mm.bing.net/th?id=OIP.6tUx71iRhHQkuNd2jTXaSQHaE_&pid=ImgDet&rs=1",
  Company:"Accenture",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:6,
  Role:"Tester",
  Description:"Minimum 2 years of Experience",
  Location:"Location:Kerala",
  image:"https://th.bing.com/th/id/OIP.TCSkGnIfl1fIQieMpI1RVAAAAA?pid=ImgDet&rs=1",
  Company:"Cognizant",
  salary:"30000",
  jobType:"Tester",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:7,
  Role:"Quality Analyst",
  Description:"Minimum 4 years of Experience",
  Location:"Location:Banglore",
  image:"https://www.onblastblog.com/wp-content/uploads/2019/09/09aea00fc018749c1c255ddfd594b218.jpeg",
  Company:"Infosys ltd",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:8,
  Role:"Architect",
  Description:"Minimum 6 years of Experience",
  Location:"Location:Pune",
  image:"https://mediafeed.org/wp-content/uploads/2020/11/iStock-1163541557.original.jpg",
  Company:"HCL Technologies",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:9,
  Role:"Angular Developer",
  Description:"Minimum 3 years of Experience",
  Location:"Location:Mumbai",
  image:"https://tse2.mm.bing.net/th?id=OIP.6tUx71iRhHQkuNd2jTXaSQHaE_&pid=ImgDet&rs=1",
  Company:"UST global",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:10,
  Role:"Digital Specialist",
  Description:"Mnimum 3 years of Experience",
  Location:"Location:Chennai",
  image:"https://th.bing.com/th/id/OIP.TCSkGnIfl1fIQieMpI1RVAAAAA?pid=ImgDet&rs=1",
  Company:"TCS",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:11,
  Role:"React Developer",
  Description:"Minimum 3 years of Experience",
  Location:"Location:Kerala",
  image:"https://www.onblastblog.com/wp-content/uploads/2019/09/09aea00fc018749c1c255ddfd594b218.jpeg",
  Company:"Wipro",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
 {
  id:12,
  Role:"React Developer",
  Description:"Minimum 3 years of Experience",
  Location:"Location:Kerala",
  image:"https://mediafeed.org/wp-content/uploads/2020/11/iStock-1163541557.original.jpg",
  Company:"Capgemini",
  salary:"30000",
  jobType:"Developer",
  qualification:"B-tech",
  LDate:"Last Date To Apply:August 31 2023",
 },
]

function HomePage() {
 return (
  <>
   <div className="search-bar">
    <SearchBar />
   </div>
   <div>
    <Row xs={1} md={4} className="g-4">
     {jobRole.map((val) => (
      <Col key={val.id}>
       <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={val.image} />
        <Card.Body>
         <Card.Title>{val.Role}</Card.Title>
         <Card.Text>
          <h5>{val.Description}</h5>
          <h6>{val.Location}</h6>
         </Card.Text>
         <Link to={`/job/${val.id}`}>
          <Button variant="primary">Know more</Button>
         </Link>
        </Card.Body>
       </Card>
      </Col>
     ))}
    </Row>
   </div>
   <Footer/>
  </>
 );
}

export default HomePage;