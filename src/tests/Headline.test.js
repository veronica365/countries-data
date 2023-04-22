import { render } from '@testing-library/react';
import Headline from '../components/Headline';

describe('Headline', () => {
  it('should render without issues', () => {
    const { container } = render(<Headline />);
    expect(container).toMatchSnapshot();
  });
});
