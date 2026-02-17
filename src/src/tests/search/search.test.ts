import { test } from '@playwright/test';
import { SearchPage } from '../../pages/SearchPage';
import searchData from '../../data/search.json';
import { addDays } from '../../utils/date';

test.describe('Flight Search Feature', () => {
  test('Negative Path - Invalid date range', async ({ page }) => {
    const search = new SearchPage(page);
    await search.goto();

    const dep = addDays(searchData.invalidSearch.departureDateOffsetDays);
    const ret = addDays(searchData.invalidSearch.returnDateOffsetDays);

    await search.searchFlights(
      searchData.invalidSearch.departureCity,
      searchData.invalidSearch.arrivalCity,
      dep,
      ret
    );

    await search.expectInvalidDateError();
  });
});
