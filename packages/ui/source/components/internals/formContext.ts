import {createContext} from 'react';
import {type UseFormReturn} from 'react-hook-form';

export const formContext = createContext<UseFormReturn | undefined>(undefined);
