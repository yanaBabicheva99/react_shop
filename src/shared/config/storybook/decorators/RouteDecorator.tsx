import { StoryFn } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const RouteDecorator = (path = '/path/1') => ((Story: StoryFn) => (
    <MemoryRouter initialEntries={[path]}>
        <Routes>
            <Route path="/path/:id" element={<Story />} />
        </Routes>
    </MemoryRouter>
));
