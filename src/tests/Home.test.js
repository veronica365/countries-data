import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../Pages/Home';
import store from '../redux/store';

describe('Home page', () => {
  it('should render without issues', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
