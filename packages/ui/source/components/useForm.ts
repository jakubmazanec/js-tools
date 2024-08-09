import {useForm as useBaseForm} from '@conform-to/react';
import {parseWithZod} from '@conform-to/zod';
import {type ZodTypeAny} from 'zod';

export type UseFormOptions<S extends ZodTypeAny> = {
  schema: S;
  onSubmit?: Parameters<typeof useBaseForm<S>>[0]['onSubmit'] | undefined;
};

export function useForm<S extends ZodTypeAny>({schema, onSubmit}: UseFormOptions<S>) {
  let [form, fields] = useBaseForm({
    shouldValidate: 'onBlur',
    onValidate({formData}) {
      return parseWithZod(formData, {schema});
    },
    onSubmit: onSubmit as NonNullable<typeof onSubmit>, // TODO: remove when this is fixed: https://github.com/edmundhung/conform/issues/697
  });

  return {
    form,
    fields,
  };
}
