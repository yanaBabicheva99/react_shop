import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import IconSwitcherDark from '@/shared/assets/switcher-dark.svg';
import IconSwitcherLight from '@/shared/assets/switcher-light.svg';
import { Button } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const {
        className,
    } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <IconSwitcherLight /> : <IconSwitcherDark />}
        </Button>
    );
});
