import {useContext} from 'react';

import {fieldContext} from './internals.js';

export function useField() {
  return useContext(fieldContext);
}
