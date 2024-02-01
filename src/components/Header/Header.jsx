import React from "react";
import Card from 'react-bootstrap/Card';
import MoreInfoBtn from "./MoreInfoBtn";
import ChangeLang from "./ChangeLang";

export default function Headers({ date, currentTime, onMoreInfoButtonClick}) {
  return (
    <div className='title-card'>
      <Card.Title className="date">
        {date}
        <MoreInfoBtn onMoreInfoButtonClick={onMoreInfoButtonClick} />
        <ChangeLang/>
      </Card.Title>
      <Card.Subtitle className="subtitle">
        {currentTime.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </Card.Subtitle>
    </div>
  );
}
