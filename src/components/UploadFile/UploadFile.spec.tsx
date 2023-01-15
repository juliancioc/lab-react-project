import { render, screen } from '@testing-library/react';

import { UploadFile } from '.';

describe('UploadFile Component', () => {
  it('should render correctly', () => {
    const title = 'Upload file';
    render(<UploadFile title={title} />);

    const titlePage = screen.getByText(title);

    expect(titlePage).toBeInTheDocument();
  });
});
