import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
};

export const StoreDecorator = (
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: StoryFn) => (
    <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={{
            ...defaultAsyncReducers,
            ...asyncReducers,
        }}
    >
        <Story />
    </StoreProvider>
);
