import { screen, fireEvent } from '@testing-library/react';
import ComponentRender from 'shared/lib/test/ComponentRender/ComponentRender';
import { SideBar } from './SideBar';

describe('', () => {
    it('Test render', () => {
        ComponentRender(<SideBar />);
        expect(screen.getByTestId('toggle-btn')).toBeInTheDocument();
    });

    it('Test toggle Sidebar', () => {
        ComponentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('toggle-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
