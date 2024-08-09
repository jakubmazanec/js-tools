import {type PropsWithChildren} from 'react';

import {themeContext} from './internals.js';
import {type Theme} from './Theme.js';

export type ThemeProviderProps = {
  theme: Theme;
};

export function ThemeProvider({children, theme}: PropsWithChildren<ThemeProviderProps>) {
  return <themeContext.Provider value={theme}>{children}</themeContext.Provider>;
}
