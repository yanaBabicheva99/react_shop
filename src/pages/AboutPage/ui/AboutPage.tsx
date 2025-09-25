import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('Страница о нас')}
            <RatingCard hasFeedBack feedbackTitle={t('Поделитесь впечатлениями')} title={t('Как вам статья ?')} />
        </Page>
    );
};

export default AboutPage;
