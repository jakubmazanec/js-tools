import {useContext} from 'react';

import {themeContext} from './themeContext.js';

export function useTheme() {
  return useContext(themeContext);
}
