import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';
import { Counter } from '@/entities/Counter';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            {t('Страница о нас')}
            <Counter />
            <RatingCard hasFeedBack feedbackTitle={t('Поделитесь впечатлениями')} title={t('Как вам статья ?')} />
        </Page>
    );
};

export default AboutPage;
