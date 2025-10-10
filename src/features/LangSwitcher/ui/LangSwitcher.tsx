import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface LangSwitcherProps {
    className?: string;
    collapsed: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const {
        className,
        collapsed,
    } = props;

    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={changeLanguage}
        >
            {t(collapsed ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
