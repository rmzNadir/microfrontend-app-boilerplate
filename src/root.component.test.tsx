import { render } from '@testing-library/react';

describe('Root component', () => {
  it('should be in the document', () => {
    const { getByText } = render(<div>Hola mundo!</div>);
    expect(getByText('Hola mundo!')).toBeInTheDocument();
  });
});
