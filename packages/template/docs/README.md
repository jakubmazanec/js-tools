# @jakubmazanec/template

## Table of contents

### Classes

- [Template](classes/Template.md)

### Type Aliases

- [TemplateAttributes](README.md#templateattributes)
- [TemplateAttributesVariables](README.md#templateattributesvariables)
- [TemplateContent](README.md#templatecontent)
- [TemplateFunction](README.md#templatefunction)
- [TemplateOptions](README.md#templateoptions)
- [TemplateReadAndRenderOptions](README.md#templatereadandrenderoptions)
- [TemplateReadOptions](README.md#templatereadoptions)
- [TemplateRender](README.md#templaterender)
- [TemplateRenderOptions](README.md#templaterenderoptions)
- [TemplateRenders](README.md#templaterenders)

### Variables

- [TemplateError](README.md#templateerror)
- [templateAttributesSchema](README.md#templateattributesschema)
- [templateVariablesSchema](README.md#templatevariablesschema)

## Type Aliases

### TemplateAttributes

Ƭ **TemplateAttributes**: `z.infer`\<typeof
[`templateAttributesSchema`](README.md#templateattributesschema)\>

Type representing template attributes.

#### Defined in

[packages/template/source/TemplateAttributes.ts:20](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateAttributes.ts#L20)

---

### TemplateAttributesVariables

Ƭ **TemplateAttributesVariables**: `z.infer`\<typeof
[`templateVariablesSchema`](README.md#templatevariablesschema)\>

Type of `variables`` property of [TemplateAttributes](README.md#templateattributes).

#### Defined in

[packages/template/source/TemplateVariables.ts:14](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateVariables.ts#L14)

---

### TemplateContent

Ƭ **TemplateContent**: `string`

Type representing a template content.

#### Defined in

[packages/template/source/TemplateContent.ts:4](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateContent.ts#L4)

---

### TemplateFunction

Ƭ **TemplateFunction**: (`data?`: `Record`\<`string`, `unknown`\>) => `string`

Type representing a template function that takes data and returns rendered string.

#### Type declaration

▸ (`data?`): `string`

##### Parameters

| Name    | Type                            |
| :------ | :------------------------------ |
| `data?` | `Record`\<`string`, `unknown`\> |

##### Returns

`string`

#### Defined in

[packages/template/source/TemplateFunction.ts:4](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateFunction.ts#L4)

---

### TemplateOptions

Ƭ **TemplateOptions**\<`A`, `D`\>: `Object`

#### Type parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `A`  | extends `AnyZodObject` \| `undefined` = `undefined` |
| `D`  | extends `AnyZodObject` \| `undefined` = `undefined` |

#### Type declaration

| Name                | Type                                                                                                                                                                      | Description                                |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------- |
| `attributes`        | `A` extends `undefined` ? [`TemplateAttributes`](README.md#templateattributes) : [`TemplateAttributes`](README.md#templateattributes) & `z.infer`\<`NonNullable`\<`A`\>\> | Template attributes.                       |
| `attributesSchema?` | `A`                                                                                                                                                                       | Zod schema for custom template attributes. |
| `content`           | `string`                                                                                                                                                                  | Template content.                          |
| `dataSchema?`       | `D`                                                                                                                                                                       | Zod schema for template data.              |
| `path?`             | `string`                                                                                                                                                                  | Template path.                             |

#### Defined in

[packages/template/source/Template.ts:18](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/Template.ts#L18)

---

### TemplateReadAndRenderOptions

Ƭ **TemplateReadAndRenderOptions**\<`A`, `D`\>: `Object`

#### Type parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `A`  | extends `AnyZodObject` \| `undefined` = `undefined` |
| `D`  | extends `AnyZodObject` \| `undefined` = `undefined` |

#### Type declaration

| Name                | Type               | Description                                              |
| :------------------ | :----------------- | :------------------------------------------------------- |
| `attributesSchema?` | `A`                | Zod schema for custom template attributes.               |
| `dataSchema?`       | `D`                | Zod schema for template data.                            |
| `disablePrettier?`  | `boolean`          | Disable formatting the rendered template using Prettier. |
| `prettierOptions?`  | `prettier.Options` | Prettier options.                                        |

#### Defined in

[packages/template/source/Template.ts:50](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/Template.ts#L50)

---

### TemplateReadOptions

Ƭ **TemplateReadOptions**\<`A`, `D`\>: `Object`

#### Type parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `A`  | extends `AnyZodObject` \| `undefined` = `undefined` |
| `D`  | extends `AnyZodObject` \| `undefined` = `undefined` |

#### Type declaration

| Name                | Type | Description                                |
| :------------------ | :--- | :----------------------------------------- |
| `attributesSchema?` | `A`  | Zod schema for custom template attributes. |
| `dataSchema?`       | `D`  | Zod schema for template data.              |

#### Defined in

[packages/template/source/Template.ts:39](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/Template.ts#L39)

---

### TemplateRender

Ƭ **TemplateRender**\<`A`, `D`\>: `Object`

An object type representing the result of a template render.

#### Type parameters

| Name | Type                                                  | Description                                                         |
| :--- | :---------------------------------------------------- | :------------------------------------------------------------------ |
| `A`  | extends `z.AnyZodObject` \| `undefined` = `undefined` | Type of Zod schema used to validate the custom template attributes. |
| `D`  | extends `z.AnyZodObject` \| `undefined` = `undefined` | Type of Zod schema used to define the type of template data.        |

#### Type declaration

| Name         | Type                                                                                                                                                                                                          | Description                                                                                                                          |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| `attributes` | `A` extends `undefined` ? `Omit`\<[`TemplateAttributes`](README.md#templateattributes), `"if"`\> : `Omit`\<[`TemplateAttributes`](README.md#templateattributes), `"if"`\> & `z.infer`\<`NonNullable`\<`A`\>\> | Rendered template attributes. They created from the `to` and `variables` attributes, and from all of the custom template attributes. |
| `content`    | `string`                                                                                                                                                                                                      | Rendered template content.                                                                                                           |
| `data`       | `D` extends `undefined` ? `null` : `z.infer`\<`NonNullable`\<`D`\>\>                                                                                                                                          | Data used to render the template.                                                                                                    |

#### Defined in

[packages/template/source/TemplateRender.ts:11](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateRender.ts#L11)

---

### TemplateRenderOptions

Ƭ **TemplateRenderOptions**: `Object`

#### Type declaration

| Name               | Type               | Description                                              |
| :----------------- | :----------------- | :------------------------------------------------------- |
| `disablePrettier?` | `boolean`          | Disable formatting the rendered template using Prettier. |
| `prettierOptions?` | `prettier.Options` | Prettier options.                                        |

#### Defined in

[packages/template/source/Template.ts:67](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/Template.ts#L67)

---

### TemplateRenders

Ƭ **TemplateRenders**\<`A`, `D`\>: [`TemplateRender`](README.md#templaterender)\<`A`, `D`\>[]

#### Type parameters

| Name | Type                                                  |
| :--- | :---------------------------------------------------- |
| `A`  | extends `z.AnyZodObject` \| `undefined` = `undefined` |
| `D`  | extends `z.AnyZodObject` \| `undefined` = `undefined` |

#### Defined in

[packages/template/source/TemplateRenders.ts:5](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateRenders.ts#L5)

## Variables

### TemplateError

• `Const` **TemplateError**: (`code`: `"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \|
`"FAILED_RENDER"`, `options?`: `CustomErrorWithDataOptions`\<`TemplateErrorData`\>) =>
`CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
`"UNKNOWN_ERROR"`, `TemplateErrorData`\>

A subclass of `Error` that indicates a template failure.

#### Type declaration

• **new TemplateError**(`code`, `options?`): `CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \|
`"FAILED_FORMAT"` \| `"FAILED_RENDER"` \| `"UNKNOWN_ERROR"`, `TemplateErrorData`\>

##### Parameters

| Name       | Type                                                             |
| :--------- | :--------------------------------------------------------------- |
| `code`     | `"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` |
| `options?` | `CustomErrorWithDataOptions`\<`TemplateErrorData`\>              |

##### Returns

`CustomErrorWithData`\<`"INVALID_ATTRIBUTES"` \| `"FAILED_FORMAT"` \| `"FAILED_RENDER"` \|
`"UNKNOWN_ERROR"`, `TemplateErrorData`\>

#### Defined in

[packages/template/source/TemplateError.ts:9](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateError.ts#L9)

---

### templateAttributesSchema

• `Const` **templateAttributesSchema**: `ZodObject`\<\{ `extends`: `ZodOptional`\<`ZodString`\> ;
`if`: `ZodOptional`\<`ZodString`\> ; `to`: `ZodString` ; `variables`:
`ZodOptional`\<`ZodUnion`\<[`ZodRecord`\<`ZodString`, `ZodUnknown`\>,
`ZodArray`\<`ZodRecord`\<`ZodString`, `ZodUnknown`\>, ``"many"``\>]\>\> }, `"strict"`, `ZodTypeAny`,
\{ `extends?`: `string` ; `if?`: `string` ; `to`: `string` ; `variables?`: `Record`\<`string`,
`unknown`\> \| `Record`\<`string`, `unknown`\>[] }, \{ `extends?`: `string` ; `if?`: `string` ;
`to`: `string` ; `variables?`: `Record`\<`string`, `unknown`\> \| `Record`\<`string`, `unknown`\>[]
}\>

Zod schema for [TemplateAttributes](README.md#templateattributes).

#### Defined in

[packages/template/source/TemplateAttributes.ts:8](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateAttributes.ts#L8)

---

### templateVariablesSchema

• `Const` **templateVariablesSchema**: `ZodUnion`\<[`ZodRecord`\<`ZodString`, `ZodUnknown`\>,
`ZodArray`\<`ZodRecord`\<`ZodString`, `ZodUnknown`\>, ``"many"``\>]\>

Zod schema for [TemplateAttributesVariables](README.md#templateattributesvariables).

#### Defined in

[packages/template/source/TemplateVariables.ts:6](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/template/source/TemplateVariables.ts#L6)
