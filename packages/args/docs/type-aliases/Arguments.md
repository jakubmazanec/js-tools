[**@jakubmazanec/args**](../README.md) • **Docs**

---

# Type alias: Arguments\<T\>

> **Arguments**\<`T`\>: `object`

Parsed arguments.

## Type parameters

• **T** _extends_ [`ParserConfig`](ParserConfig.md)

## Type declaration

### command

> `readonly` **command**: [`ArgumentsCommand`](ArgumentsCommand.md)\<`T`\>

Parsed command.

### errors

> `readonly` **errors**: `Error`[]

Parsing and validation rrors

### options

> `readonly` **options**: [`ArgumentsOptions`](ArgumentsOptions.md)\<`T`\>

Parsed options.

### parameters

> `readonly` **parameters**: [`ArgumentsParameters`](ArgumentsParameters.md)\<`T`\>

Parsed parameters.

### rest

> `readonly` **rest**: `string`[]

Arguments that appear after "--".

### unknownOptions

> `readonly` **unknownOptions**: [`ArgumentsUnknownOptions`](ArgumentsUnknownOptions.md)\<`T`\>

Unconfigured options.

## Source

[args/source/Arguments.ts:10](https://github.com/jakubmazanec/js-tools/blob/0a7ca643260718f11723fa4df4f144d2d5a8a885/packages/args/source/Arguments.ts#L10)
