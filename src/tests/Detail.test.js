import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Details from '../Pages/Details';
import store from '../redux/store';
import { findCountry } from '../redux/countries';
import { muchCountryData } from './__Mocks__/countries';

jest.mock('axios');
describe('Details page', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
    jest.resetModules();
    jest.restoreAllMocks();
    axios.get.mockResolvedValue({
      data: [muchCountryData],
    });
  });

  it('should render without issues', async () => {
    await store.dispatch(findCountry(1));
    await act(async () => {
      const route = '/country/1';
      const { container } = render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[route]}>
            <Routes>
              <Route path="/country/:id" element={<Details />} />
            </Routes>
          </MemoryRouter>
        </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
  it('Should be able to fetch data for all countries', async () => {
    const { type, payload } = await store.dispatch(findCountry('1'));
    expect(type).toEqual('find/fulfilled');
    expect(payload[0]).toEqual(muchCountryData);
    expect(store.getState().countries.countryById).toEqual(muchCountryData);
  });
});
