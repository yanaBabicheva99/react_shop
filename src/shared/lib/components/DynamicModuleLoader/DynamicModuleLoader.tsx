import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchema, StateSchemaKey, StoreWithReducerManager } from '@/app/providers/StoreProvider';
import { AppDispatch } from '@/app/providers/StoreProvider/config/store';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterMount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterMount = true,
    } = props;

    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const reducerMap = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([key, reducer]) => {
            if (!reducerMap[key as StateSchemaKey]) {
                dispatch({ type: `@INIT ${key}` });
                store.reducerManager.add(key as StateSchemaKey, reducer);
            }
        });

        return () => {
            if (removeAfterMount) {
                Object.entries(reducers).forEach(([key, _]) => {
                    dispatch({ type: `@DESTROY ${key}` });
                    store.reducerManager.remove(key as StateSchemaKey);
                });
            }
        };
    }, []);

    return (
        <>{children}</>
    );
};
