import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";
import PropTypes from "prop-types";

const TimelineEvent = props => {
  // Component functions always return JSX
  const timeStamp = props.timeStamp;
  const time = Timestamp(timeStamp);
  return (
    <section className="timeline-event">
      <h3 className="event-person">{props.name}</h3>
      <h3 className="event-status">{props.status}</h3>
      <h3 className="event-time">{time}</h3>
    </section>
  );
};
TimelineEvent.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  timeline: PropTypes.string,
  timeStamp: PropTypes.string
};

export default TimelineEvent;
