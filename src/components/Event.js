import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails((prev) => !prev);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{formatDate(event.created)}</p>
      <p>{event.location}</p>
      <button
        className="showDetailsButton"
        aria-expanded={showDetails}
        onClick={toggleDetails}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="details">
          <h3>Event Details</h3>
          <p>{event.description}</p>{" "}
          {/* Changed from event.details to event.description */}
        </div>
      )}
    </li>
  );
};

export default Event;
