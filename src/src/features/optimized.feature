Flight Search
As a customer
I want to search for flights
So I can find available itineraries

Scenario Outline: Search flights with different date ranges
Given the user is on the flight search page
When the user searches for a flight from "<departureCity>" to "<arrivalCity>"
with departure date "<departureDate>" and return date "<returnDate>"
Then the system should show "<expectedResult>"

Examples:
| departureCity | arrivalCity | departureDate | returnDate | expectedResult        |
| SOF           | LON         | 2025-12-10    | 2025-12-20 | Results displayed     |
| SOF           | LON         | 2025-12-25    | 2025-12-20 | Invalid date range    |
| SOF           | XXX         | 2025-12-10    | 2025-12-20 | Invalid city entered  |
