import {useContext} from 'react';

import {fieldNameContext} from './internals.js';

export function useFieldName() {
  return useContext(fieldNameContext);
}
