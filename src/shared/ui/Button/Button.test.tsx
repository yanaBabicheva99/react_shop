import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('', () => {
    it('Test render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Test Button</Button>);
        expect(screen.getByText(/test button/i)).toBeInTheDocument();
    });
});
