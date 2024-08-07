[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Type alias: FailureProps

> **FailureProps**: `BoxProps` & `object`

[Failure](../functions/Failure.md) component props.

## Type declaration

### error

> **error**: `Error`

Error that describes a failure state. Function [getErrorDetail](../functions/getErrorDetail.md) is
used for getting all the information from the error; you can use it to implement own retrieval logic
and pass the result as `errorDetail` prop.

### errorDetail?

> `optional` **errorDetail**: [`ErrorDetail`](ErrorDetail.md)

Information about the failure state. Overrides information retireved from `error` prop.

## Source

[cli/source/ui/Failure.tsx:12](https://github.com/jakubmazanec/js-tools/blob/0a7ca643260718f11723fa4df4f144d2d5a8a885/packages/cli/source/ui/Failure.tsx#L12)
