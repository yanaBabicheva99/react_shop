import React from 'react';
import { Page } from '@/widgets/Page';
import { VirtualizationList } from '@/shared/ui/VirtualizationList';

const MainPage = () => (
    <Page>
        {/* {t('Главная страница')} */}
        <VirtualizationList />
    </Page>
);

export default MainPage;
