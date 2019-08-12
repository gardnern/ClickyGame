//sets up the reusable FriendCard component
import React from "react";
import "./DogCard.css";
// import img from "./img";



//pass the image into each card so all 12 are rendered
const DogCard = props => (
  
  <div 
  className="card" 
  onClick = {props.imageClick}>
    <div className="img-container">
  
    <img  src={props.img}
    id= {props.id} 
    alt={props.img} 

 />
    </div>
  </div>
);

// console.log(img);
export default DogCard;
