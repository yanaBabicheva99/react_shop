import React, {FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface ThemeProvider {
    children: ReactNode;
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProvider> = ({children}) => {

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        document.body.className = defaultTheme;
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