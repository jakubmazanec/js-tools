import {type FieldName} from '@conform-to/react';
import {createContext} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
export const fieldNameContext = createContext<FieldName<any> | undefined>(undefined);
