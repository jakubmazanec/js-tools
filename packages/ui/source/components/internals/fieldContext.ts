import {type FieldMetadata} from '@conform-to/react';
import {createContext} from 'react';

export const fieldContext = createContext<FieldMetadata | undefined>(undefined);
