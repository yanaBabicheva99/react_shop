import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState?: DeepPartial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={initialState as StateSchema}>
        <Story />
    </StoreProvider>
);
