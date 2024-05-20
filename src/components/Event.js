import React from "react";

const Event = ({ event }) => {
  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
    </li>
  );
};

export default Event;
