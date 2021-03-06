import React from "react";
import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = props => {
  console.log(props);
  const events = props.data.events.map(object => {
    return (
      <TimelineEvent
        name={object.person}
        status={object.status}
        timestamp={object.timeStamp}
        key={object.person}
      />
    );
  });
  return <div>{events}</div>;
};
export default Timeline;
