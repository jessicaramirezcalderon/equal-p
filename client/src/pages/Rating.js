import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
// //Components
// //import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
// import { Input, /*TextArea,*/ FormBtn } from "../components/Form";

// function Rating() {
//   // Setting our component's initial state
  const [review, setReview] = useState([])
//   const [formObject, setFormObject] = useState({})

//   // Load all companies and store them with setReview
useEffect(() => {
    getReview();
});

//   // Loads all companies and sets them to companies
function getReview() {
    API.getRatings()
        .then(res =>
            setReview(res.data)
        )
        .catch(err => console.log(err));
};

//   // Deletes a companies from the database with a given id, then reloads companies from the db
// //   function deleteCompany(id) {
// //     API.deleteCompany(id)
// //       .then(res => loadCompanies())
// //       .catch(err => console.log(err));
// //   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.saveCompany method to save the company data
// //   // Then reload companies from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title) {
//       API.ratingData({
//         rating: rating.num,
//       })
//         .then(res => loadCompanies())
//         .catch(err => console.log(err));
//     }
//   };

//   console.log(companies)

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>Company Results</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />

//               <FormBtn
//                 disabled={!(formObject.title)}
//                 onClick={handleFormSubmit}
//               >
//                 Search
//               </FormBtn>
//             </form>
//           </Col>

//           <Col size="md-6 sm-12">

//             {/* {companies.length ? (
//               <List>
//                 {companies.map(company => (
//                   <ListItem key={company._id}>
//                     <Link to={"/company/" + company._id}>
//                       <strong>
//                         {company.title}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => deleteCompany(company._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )} */}
//           </Col>

//         </Row>
//       </Container>
//     );
//   }


// export default Rating;
