import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import card1 from "../assets/images/img-9.jpg";
import card2 from "../assets/images/img-2.jpg";
import card3 from "../assets/images/img-3.jpg";
import card4 from "../assets/images/img-4.jpg";
import card5 from "../assets/images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              path="/services"
              src={card1}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
            />
            <CardItem
              path="/services"
              src={card2}
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={card3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={card4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={card5}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
