Feature: User Sign In
  As a customer
  I want to sign in with valid credentials
  So I can access my dashboard

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user submits valid email and password
    Then the user sees the dashboard welcome message
