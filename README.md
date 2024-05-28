# Meet App

## Description

The Meet app is designed to be a serverless, progressive web application (PWA) built with React, utilizing a test-driven development (TDD) technique. It leverages the Google Calendar API to fetch and display upcoming events. The app aims to provide seamless offline access to event information, ensuring a robust user experience across various devices through its responsive design. By prioritizing code quality and test coverage, the Meet app maintains high performance and reliability.

## API of the project

The application uses the Google Calendar API to fetch upcoming events.

## Serverless Functions

This app uses serverless functions for authorizing access to public calendar events from the Google Calendar API. The user enters a key and secret to ask for an access token from the authorization server. The server informs the user with a consent screen. When the user agrees by logging into their Google account and giving consent, the app can fetch and show the calendar events.

## Features, User Stories and Scenarios:

### Feature 1: Filter Events By City

- **User Story 1:** As a user, I want to see all upcoming events when no specific city is searched so that I can explore a wide range of events.
- **Scenario 1:** Display all events when no city is searched.

  - Given no city has been searched for,
  - When the user views the list of upcoming events,
  - Then all upcoming events from all cities are displayed.

- **User Story 2:** As a user, I want to see a list of suggestions when I search for a city to ensure I find events in the area I am interested in.
- **Scenario 2:** Show suggestions when searching for a city.

  - Given the user has started to type in the city search field,
  - When they enter a part of a city name,
  - Then a list of suggested cities containing the entered text is shown.

- **User Story 3:** As a user, I want to be able to select a city from the suggested list so that I can view events in that particular city.
- **Scenario 3:** User can select a city from the suggestions.
  - Given the user is presented with a list of suggested cities,
  - When the user selects a city from the list,
  - Then the upcoming events from that city are displayed.

### Feature 2: Show/Hide Event Details

- **User Story 4:** As a user, I want event details to be collapsed by default to keep the interface clean and easy to navigate.
  - **Scenario 1:** Event details are collapsed by default.
    - **Given** the user views the list of events,
    - **When** the page is initially loaded,
    - **Then** all the event details are collapsed.
- **User Story 5:** As a user, I want to be able to expand an event to see more details so I can learn more about events that interest me.
  - **Scenario 2:** Expand an event to see more details.
    - **Given** the user views the list of collapsed event elements,
    - **When** the user clicks on an event element,
    - **Then** the details of the event are expanded and visible.
- **User Story 6:** As a user, I want to be able to collapse an event after viewing its details to minimize clutter on my screen.
  - **Scenario 3:** Collapse an event to hide details.
    - **Given** the user views an expanded event element,
    - **When** the user clicks on the event element again,
    - **Then** the details of the event are collapsed and hidden.

### Feature 3: Specify Number of Events

- **User Story 7:** As a user, I want to see a default number of 32 events when I haven't specified a number so that I am presented with a substantial but manageable list initially.
  - **Scenario 1:** Show default number of events.
    - **Given** the user has not specified a number of events to display,
    - **When** the user views the list of events,
    - **Then** 32 events are displayed by default.
- **User Story 8:** As a user, I want to change the number of events displayed so I can customize the view according to my preferences.
  - **Scenario 2:** Change the number of events displayed.
    - **Given** the user is viewing the list of events,
    - **When** the user specifies a different number of events to display,
    - **Then** that specified number of events is displayed.

### Feature 4: Use the App When Offline

- **User Story 9:** As a user, I want to see cached data when there’s no internet connection so I can still access event information.
  - **Scenario 1:** Show cached data when offline.
    - **Given** the user has no internet connection,
    - **And** there is cached data available,
    - **When** the user opens the app,
    - **Then** the cached event data is displayed.
- **User Story 10:** As a user, I want to receive an error message when I attempt to change search settings while offline so I understand why changes cannot be processed.
  - **Scenario 2:** Error when changing search settings offline.
    - **Given** the user has no internet connection,
    - **When** the user attempts to change search settings like city or number of events,
    - **Then** an error message is displayed explaining the inability to process changes due to no internet connection.

### Feature 5: Add an App Shortcut to the Home Screen

- **User Story 11:** As a user, I want to install the app as a shortcut on my device's home screen for quicker access.
  - **Scenario:** User adds the app shortcut to their device's home screen.
    - **Given** the user is using the meet app,
    - **When** the user selects to add the app to their home screen,
    - **Then** the shortcut to the meet app is added to their device’s home screen.

### Feature 6: Display Charts Visualizing Event Details

- **User Story 12:** As a user, I want to see a chart displaying the number of upcoming events in each city to better understand where events are concentrated.
  - **Scenario:** Show chart of upcoming events by city.
    - **Given** the user accesses the visualization section of the app,
    - **When** the user views the chart,
    - **Then** a chart displaying the number of upcoming events in each city is shown.

### The use of Serverless Functions

Serverless functions are utilized in the Meet app to handle backend operations without the need for maintaining server infrastructure. For example, when users request information about upcoming events or perform actions like filtering events by city, serverless functions respond to these requests by retrieving and processing data from the database. By leveraging serverless architecture, the app ensures scalability, cost-effectiveness, and efficient resource utilization, allowing seamless access to event information regardless of the user's location or network connectivity.

### Run this project locally

- Clone this repository

- Go to the project directory

      cd project-folder

- Install dependencies

      npm install

- Run on localhost:3000

      npm run start
