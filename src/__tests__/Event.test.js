import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockData from "../mock-data";
import Event from "../components/Event";

describe("<Event /> component", () => {
  const event = mockData[0]; // Assuming mockData is directly an array of these event objects
  let EventComponent;

  beforeEach(() => {
    // Render Event component with an event item from mock data
    EventComponent = render(<Event event={event} />);
  });

  test("renders event title", () => {
    // Check if event summary is in the document
    expect(screen.queryByText(event.summary)).toBeInTheDocument();
  });

  test("renders event creation time", () => {
    // Check if event creation time is in the document
    expect(
      screen.queryByText(new Date(event.created).toLocaleString())
    ).toBeInTheDocument();
  });

  test("renders event location", () => {
    // Check if event location is in the document
    expect(screen.queryByText(event.location)).toBeInTheDocument();
  });

  test("renders a button to show details", () => {
    // Check if the 'Show Details' button is in the document
    expect(screen.queryByText("Show Details")).toBeInTheDocument();
  });

  test("does not show event details by default", () => {
    // Check that the details are not shown by default
    const details = EventComponent.container.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test("shows event details when 'Show Details' button is clicked", () => {
    // Click the 'Show Details' button
    userEvent.click(screen.getByText("Show Details"));
    // Check if details are now visible and contain correct information
    expect(screen.getByText("Hide Details")).toBeInTheDocument();
    expect(screen.getByText(event.description)).toBeInTheDocument(); // Assuming the 'details' in component is event.description
  });

  test("hides event details when 'Hide Details' button is clicked", () => {
    // Click the 'Show Details' button to show details
    userEvent.click(screen.getByText("Show Details"));
    // Click the 'Hide Details' button to hide details
    userEvent.click(screen.getByText("Hide Details"));
    // Check if details are not visible
    expect(screen.queryByText("Show Details")).toBeInTheDocument();
    expect(screen.queryByText(event.description)).not.toBeInTheDocument();
  });
});
