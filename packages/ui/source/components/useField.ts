import {type Control, useController} from 'react-hook-form';

import {useForm} from './internals.js';
import {useFieldName} from './useFieldName.js';

export function useField() {
  let name = useFieldName();
  let form = useForm();
  let {field, fieldState} = useController({
    name: name ?? '',
    control: form?.control as Control, // TODO: `useControllel` doesn't accept `undefined` and cannot be called conditionally :(
  });

  if (!name || !form) {
    return undefined;
  }

  return {name, props: field, state: fieldState, form};
}
