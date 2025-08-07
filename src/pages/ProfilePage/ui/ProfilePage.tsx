import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { fetchProfileData } from 'features/EditableProfileCard/model/services/FetchProfileData/FetchProfileData';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';

const reducersList: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{id: string}>();

    const { t } = useTranslation('profile');

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    if (!id) {
        return (
            <Page>
                <Text text={t('Профиль пользователя не найден')} theme={TextTheme.ERROR} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterMount>
            <Page>
                <EditableProfileCard />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
