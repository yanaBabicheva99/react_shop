import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
    const { id } = useParams<{id: string}>();

    const { t } = useTranslation('profile');

    if (!id) {
        return (
            <Page data-testid="ProfilePage">
                <Text text={t('Профиль пользователя не найден')} theme={TextTheme.ERROR} />
            </Page>
        );
    }

    return (
        <Page data-testid="ProfilePage">
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
