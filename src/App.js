import React from "react";
import Header from "./component/Header";
import TravelCard from "./component/TravelCard";
import "./App.css";
import TravelData from "./component/TravelData";

export default function App() {
  const groupedTravels = TravelData.reduce((acc, travel) => {
    const category = travel.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(travel);
    return acc;
  }, {});
  const travels = Object.keys(groupedTravels).map((category, index) => (
    <div key={index}>
      <div className="section--name">{category}</div>
      {groupedTravels[category].map((travel) => (
        <TravelCard key={travel.id} {...travel} />
      ))}
    </div>
  ));

  return (
    <div className="app--container">
      <Header />
      <div className="cards--container">{travels}</div>
    </div>
  );
}
