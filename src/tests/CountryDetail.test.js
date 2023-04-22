import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import CountryDetail from '../components/CountryDetail';
import { muchCountryData } from './__Mocks__/countries';
import store from '../redux/store';

describe('CountryDetail', () => {
  it('should display all the country details', () => {
    const { container } = render(
      <Provider store={store}>
        <CountryDetail country={muchCountryData} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
