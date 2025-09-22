import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import IconSwitcherDark from '@/shared/assets/switcher-dark.svg';
import IconSwitcherLight from '@/shared/assets/switcher-light.svg';
import { Button } from '@/shared/ui/Button/Button';

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
