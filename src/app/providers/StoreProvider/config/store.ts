import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraConfig } from '@/app/providers/StoreProvider';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { scrollTrackingReducer } from '@/features/ScrollTracking';
import { rtkApi } from '@/shared/api/rtkApi';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scroll: scrollTrackingReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const extraArgs: ThunkExtraConfig = {
        api: $api,
    };

    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArgs,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
