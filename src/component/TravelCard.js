import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function TravelCard(props) {
  const element = <FontAwesomeIcon icon={faLocationDot} size="xs" color="#F55A5A" />;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionRef = useRef(null);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    const { description } = props;
    if (description.length <= 300 || showFullDescription) {
      return (
        <>
          {description}{" "}
          {description.length > 300 && (
            <span className="read-more" onClick={toggleDescription}>
              {showFullDescription ? "Read less" : "Read more"}
            </span>
          )}
        </>
      );
    } else {
      const truncatedText = description.slice(0, 150) + "...";
      return (
        <>
          {truncatedText}{" "}
          <span className="read-more" onClick={toggleDescription}>
            Read more
          </span>
        </>
      );
    }
  };

  useEffect(() => {
    if (descriptionRef.current) {
      if (showFullDescription) {
        descriptionRef.current.style.maxHeight = `${descriptionRef.current.scrollHeight}px`;
      } else {
        descriptionRef.current.style.maxHeight = "76px"; // Initial collapsed height
      }
    }
  }, [showFullDescription]);

  useEffect(() => {
    if (props.description.length > 300) {
      descriptionRef.current.classList.add("expanded");
    } else {
      descriptionRef.current.classList.remove("expanded");
    }
  }, [props.description]);

  return (
    <div className="card--container">
      <div className="card--image-container">
        <img className="card--image" src={`/images/${props.img}`} alt="Travelers gallery" />
      </div>
      <div className="card--content">
        {props.isFirstInCategory && <div className="section--name">{props.category}</div>}
        <div className="card--content--header">
          <h3 className="card--country">
            {element} {props.country}
          </h3>
          <a className="card--link" href={props.link}>
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <div className="card--dates">
          <span className="startDate">{props.startDate}</span>
          <span className="endDate"> - {props.endDate}</span>
        </div>
        <p className={`card--description ${props.description.length > 300 ? "expandable" : ""}`} ref={descriptionRef}>
          {renderDescription()}
        </p>
      </div>
    </div>
  );
}
