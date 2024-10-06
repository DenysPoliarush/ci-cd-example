# local-storage-service

> A TypeScript-based local storage service for managing data in the browser's local storage.

## Install

Using `npm`:

```shell
npm install typed-local-storage-service --save
```
Configure your local storage with your interface
```shell
import LocalStorageService from 'typed-local-storage-service'

interface ILocalStorage {
  sendTo: string
  test: string
}

export const useLocalStorage = new LocalStorageService<ILocalStorage>()
```
## API

This package provides a type-safe way to interact with the browser's `localStorage`. It ensures that the values stored are correctly typed, making it easier to manage data across your application.

### `setItem<T>(key: string, value: T): void`

Stores a value under the specified key in local storage. The value is serialized to JSON.

**Example**

```typescript
import { setItem } from 'typed-local-storage-service';

setItem('user', { name: 'Alice', age: 30 });
```

### `getItem<T>(key: string): T | null`

Retrieves the value associated with the specified key. The value is deserialized from JSON.

**Example**

```typescript
import { getItem } from 'typed-local-storage-service';

const user = getItem<{ name: string; age: number }>('user');
console.log(user); // { name: 'Alice', age: 30 }
```

### `removeItem(key: string): void`

Removes the specified key from local storage.

**Example**

```typescript
import { removeItem } from 'typed-local-storage-service';

removeItem('user');
```

### `clear(): void`

Clears all items in local storage.

**Example**

```typescript
import { clear } from 'typed-local-storage-service';

clear();
```

### `getAllKeys(): string[]`

Returns an array of all keys currently stored in local storage.

**Example**

```typescript
import { getAllKeys } from 'typed-local-storage-service';

const keys = getAllKeys();
console.log(keys); // ['user', ...]
```

## TypeScript Support

This package is fully compatible with TypeScript, allowing you to define interfaces for your stored objects.

**Example**

```typescript
interface IUser {
  name: string;
  age: number;
}

setItem<IUser>('user', { name: 'Alice', age: 30 });
const user = getItem<IUser>('user');
```

## License

MIT