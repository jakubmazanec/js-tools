[**@jakubmazanec/template**](../README.md) • **Docs**

---

# Variable: templateAttributesSchema

> `const` **templateAttributesSchema**: `ZodObject`\<`object`, `"strict"`, `ZodTypeAny`, `object`,
> `object`\>

Zod schema for [TemplateAttributes](../type-aliases/TemplateAttributes.md).

## Type declaration

### extends

> **extends**: `ZodOptional`\<`ZodString`\>

### if

> **if**: `ZodOptional`\<`ZodString`\>

### to

> **to**: `ZodString`

### variables

> **variables**: `ZodOptional`\<`ZodUnion`\<[`ZodRecord`\<`ZodString`, `ZodUnknown`\>,
> `ZodArray`\<`ZodRecord`\<`ZodString`, `ZodUnknown`\>, `"many"`\>]\>\>

## Source

[packages/template/source/TemplateAttributes.ts:8](https://github.com/jakubmazanec/js-tools/blob/d8fb2f4f9576baa170e480eea0b247af3afdcd86/packages/template/source/TemplateAttributes.ts#L8)