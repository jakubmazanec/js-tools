import {useContext} from 'react';

import {formIdContext} from './formIdContext.js';

export function useFormId() {
  return useContext(formIdContext);
}
