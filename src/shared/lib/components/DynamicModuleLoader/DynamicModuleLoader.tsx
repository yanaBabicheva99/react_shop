import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StateSchemaKey, StoreWithReducerManager } from 'app/providers/StoreProvider';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterMount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterMount,
    } = props;

    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: [StateSchemaKey, Reducer]) => {
            dispatch({ type: `@INIT ${key}` });
            store.reducerManager.add(key, reducer);
        });

        return () => {
            if (removeAfterMount) {
                Object.entries(reducers).forEach(([key, _]: [StateSchemaKey, Reducer]) => {
                    dispatch({ type: `@DESTROY ${key}` });
                    store.reducerManager.remove(key);
                });
            }
        };
    }, []);

    return (
        <div>{children}</div>
    );
};
