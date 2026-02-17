Feature: Flight Search
  As a customer
  I want to search for flights
  So I can find available itineraries

  Scenario: Invalid date range produces an error
    Given the user is on the flight search page
    When the departure date is after the return date
    Then an error message is shown and no results appear
