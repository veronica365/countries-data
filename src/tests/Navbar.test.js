import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import { getData, searchCountry } from '../redux/countries';
import { muchCountryData } from './__Mocks__/countries';

jest.mock('axios');

describe('Navbar Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
    jest.restoreAllMocks();
    axios.get.mockResolvedValue({
      data: [muchCountryData],
    });
  });
  it('should render and navbar and fetch countries', () => {
    const dispatch = jest.spyOn(store, 'dispatch');
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json',
    );
    expect(dispatch).toHaveBeenCalled();
  });
  it('Should be able to fetch data for all countries', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
    expect(store.getState().countries.countries.length).toEqual(1);
  });
  it('Should be able to search for a country from the data', async () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
    fireEvent.input(container.querySelector('input'), {
      target: {
        value: 'uganda',
      },
    });
    expect(store.getState().countries.countries.length).toEqual(1);
    expect(store.getState().countries.countriesBySearch.length).toEqual(0);
    fireEvent.input(container.querySelector('input'), {
      target: {
        value: 'a',
      },
    });
    await store.dispatch(searchCountry('a'));
    expect(store.getState().countries.countriesBySearch.length).toEqual(1);
  });
  it('Should be able to search data for all countries that much a query param', async () => {
    await store.dispatch(searchCountry('a'));
    expect(store.getState().countries.countriesBySearch.length).toEqual(1);
  });
  it('Should be able to fetch data for all countries', async () => {
    await store.dispatch(getData());
    expect(store.getState().countries.countries.length).toEqual(1);
  });
});
