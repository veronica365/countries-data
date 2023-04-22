import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CountryItem from '../components/CountryItem';
import { lessCountryData } from './__Mocks__/countries';
import store from '../redux/store';

describe('CountryItem', () => {
  it('should render with fewer country details as props', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CountryItem country={lessCountryData} />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
