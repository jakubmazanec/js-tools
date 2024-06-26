[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: MapCache

Creates a cache object to store key/value pairs.

## Properties

### clear()?

> `optional` **clear**: () => `void`

Removes all key-value entries from the map.

#### Returns

`void`

#### Source

node_modules/@types/lodash/common/common.d.ts:169

## Methods

### delete()

> **delete**(`key`): `boolean`

Removes `key` and its value from the cache.

#### Parameters

• **key**: `any`

The key of the value to remove.

#### Returns

`boolean`

Returns `true` if the entry was removed successfully, else `false`.

#### Source

node_modules/@types/lodash/common/common.d.ts:146

---

### get()

> **get**(`key`): `any`

Gets the cached value for `key`.

#### Parameters

• **key**: `any`

The key of the value to get.

#### Returns

`any`

Returns the cached value.

#### Source

node_modules/@types/lodash/common/common.d.ts:152

---

### has()

> **has**(`key`): `boolean`

Checks if a cached value for `key` exists.

#### Parameters

• **key**: `any`

The key of the entry to check.

#### Returns

`boolean`

Returns `true` if an entry for `key` exists, else `false`.

#### Source

node_modules/@types/lodash/common/common.d.ts:158

---

### set()

> **set**(`key`, `value`): `this`

Sets `value` to `key` of the cache.

#### Parameters

• **key**: `any`

The key of the value to cache.

• **value**: `any`

The value to cache.

#### Returns

`this`

Returns the cache object.

#### Source

node_modules/@types/lodash/common/common.d.ts:165
