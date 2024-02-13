import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import LIGHT_THEME from "./light.ts";
import React from "react";

const AppThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const theme = createTheme(LIGHT_THEME)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;