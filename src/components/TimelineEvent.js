import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";
import PropTypes from "prop-types";

const TimelineEvent = props => {
  // Component functions always return JSX
  const timeStamp = props.timeStamp;
  const time = Timestamp(timeStamp);
  return (
    <section>
      <h3>{props.name}</h3>
      <h3>{props.status}</h3>
      <h3>{time}</h3>
    </section>
  );
};
TimelineEvent.propTypes = {
  person: PropTypes.string,
  status: PropTypes.string,
  timeline: PropTypes.string
};

export default TimelineEvent;
