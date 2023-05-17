import React from "react";

const Weather = (props) => {
  const isCold = props.temperature < 10; // Adjust the threshold as needed

  return (
    <div className={`Weather ${isCold ? "Cold" : ""}`}>
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.city && <p>City: {props.city}</p>}
      {props.country && <p>Country: {props.country}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Description: {props.description}</p>}
      {props.error && <p>Error: {props.error}</p>}
    </div>
  );
};

export default Weather;
