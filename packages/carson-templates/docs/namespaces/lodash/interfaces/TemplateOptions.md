[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: TemplateOptions

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

## Extends

- [`TemplateSettings`](TemplateSettings.md)

## Properties

### escape?

> `optional` **escape**: `RegExp`

The "escape" delimiter.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`escape`](TemplateSettings.md#escape)

#### Source

node_modules/@types/lodash/common/common.d.ts:119

---

### evaluate?

> `optional` **evaluate**: `RegExp`

The "evaluate" delimiter.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`evaluate`](TemplateSettings.md#evaluate)

#### Source

node_modules/@types/lodash/common/common.d.ts:123

---

### imports?

> `optional` **imports**: [`Dictionary`](Dictionary.md)\<`any`\>

An object to import into the template as local variables.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`imports`](TemplateSettings.md#imports)

#### Source

node_modules/@types/lodash/common/common.d.ts:127

---

### interpolate?

> `optional` **interpolate**: `RegExp`

The "interpolate" delimiter.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`interpolate`](TemplateSettings.md#interpolate)

#### Source

node_modules/@types/lodash/common/common.d.ts:131

---

### sourceURL?

> `optional` **sourceURL**: `string`

#### See

\_.sourceURL

#### Source

node_modules/@types/lodash/common/string.d.ts:478

---

### variable?

> `optional` **variable**: `string`

Used to reference the data object in the template text.

#### Inherited from

[`TemplateSettings`](TemplateSettings.md).[`variable`](TemplateSettings.md#variable)

#### Source

node_modules/@types/lodash/common/common.d.ts:135
