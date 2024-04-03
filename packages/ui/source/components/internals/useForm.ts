import {useContext} from 'react';

import {formContext} from './formContext.js';

export function useForm() {
  return useContext(formContext);
}
