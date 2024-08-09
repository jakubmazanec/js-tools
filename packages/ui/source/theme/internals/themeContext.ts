import {createContext} from 'react';

import {type Theme} from '../Theme.js';

export const themeContext = createContext<Theme | undefined>(undefined);
