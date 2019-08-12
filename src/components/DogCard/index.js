//sets up the reusable FriendCard component
import React from "react";
import "./DogCard.css";



//pass the image into each card so all 12 are rendered
const DogCard = props => (
  <div 
  className="card" 
  onClick = {props.imageClick}>
    <div className="img-container">
      <img id= {props.id} alt={props.image} src={(props.image)} />
    </div>
  </div>
);

export default DogCard;
