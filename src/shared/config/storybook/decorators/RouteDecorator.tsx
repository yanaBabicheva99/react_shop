import { StoryFn } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

export const RouteDecorator =
    (path = '/path/1') =>
    (Story: StoryFn) => (
        <MemoryRouter initialEntries={[path]}>
            <Suspense fallback="">
                <Routes>
                    <Route path="/path/:id" element={<Story />} />
                </Routes>
            </Suspense>
        </MemoryRouter>
    );
