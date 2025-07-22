import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { fetchProfileData } from 'features/EditableProfileCard/model/services/FetchProfileData/FetchProfileData';
import { EditableProfileCard } from 'features/EditableProfileCard';

const reducersList: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    // const { t } = useTranslation('profile');

    useEffect(() => {
        if (__Project__ === 'frontend') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterMount>
            <EditableProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
