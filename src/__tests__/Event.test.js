import React from "react";
import { render } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0].items[0]; // Access the first event from the items array

  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test("renders event title", () => {
    const eventTitle = EventComponent.queryByText(event.summary);
    console.log(event.summary, eventTitle); // Debugging line
    expect(eventTitle).toBeInTheDocument();
  });

  test("renders event location", () => {
    const eventLocation = EventComponent.queryByText(event.location);
    console.log(event.location, eventLocation); // Debugging line
    expect(eventLocation).toBeInTheDocument();
  });
});
