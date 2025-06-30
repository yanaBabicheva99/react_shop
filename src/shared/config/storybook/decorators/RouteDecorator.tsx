import { StoryFn } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export const RouteDecorator = (path = '/') => ((Story: StoryFn) => (
    <MemoryRouter initialEntries={[path]}>
        <Story />
    </MemoryRouter>
));
