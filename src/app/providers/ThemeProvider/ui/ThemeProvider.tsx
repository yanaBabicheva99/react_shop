import React, {
    FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface ThemeProvider {
    children: ReactNode;
    themeForTest?: Theme;
}

const ThemeProvider: FC<ThemeProvider> = ({ children, themeForTest }) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(themeForTest || defaultTheme);

    useEffect(() => {
        document.body.className = theme;
    }, []);

    const defaultThemeProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultThemeProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
