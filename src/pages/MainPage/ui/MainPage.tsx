import React from 'react';
import { Page } from '@/widgets/Page/Page';
import { VirtualizationList } from '@/shared/ui/VirtualizationList/VirtualizationList';

const MainPage = () => (
    <Page>
        {/* {t('Главная страница')} */}
        <VirtualizationList />
    </Page>
);

export default MainPage;
