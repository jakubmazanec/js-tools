[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Type alias: TemplateOptions\<A, D\>

> **TemplateOptions**\<`A`, `D`\>: `object`

## Type parameters

• **A** _extends_ `AnyZodObject` \| `undefined` = `undefined`

• **D** _extends_ `AnyZodObject` \| `undefined` = `undefined`

## Type declaration

### attributes

> **attributes**: `A` _extends_ `undefined` ? [`TemplateAttributes`](TemplateAttributes.md) :
> [`TemplateAttributes`](TemplateAttributes.md) & `z.infer`\<`NonNullable`\<`A`\>\>

Template attributes.

### attributesSchema?

> `optional` **attributesSchema**: `A`

Zod schema for custom template attributes.

### content

> **content**: `string`

Template content.

### dataSchema?

> `optional` **dataSchema**: `D`

Zod schema for template data.

### path?

> `optional` **path**: `string`

Template path.

## Source

[packages/template/source/Template.ts:18](https://github.com/jakubmazanec/js-tools/blob/d8fb2f4f9576baa170e480eea0b247af3afdcd86/packages/template/source/Template.ts#L18)