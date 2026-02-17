import { test, expect } from '../../fixtures/auth.fixtures';
import { BookingPage } from '../../pages/BookingPage';

test('Golden Path - Complete booking (authenticated)', async ({ authenticatedPage }) => {
  const booking = new BookingPage(authenticatedPage);
  // implement booking steps...
});
