# typed-local-storage-service

> A TypeScript-based local storage service for managing data in the browser's local storage.

## Install

Using `npm`:

```shell
npm install local-storage-service --save
```
## Usage
```shell
import LocalStorageService from 'typed-local-storage-service'

interface IUser {
  name: string
  age: number
}

interface ILocalStorage {
  user: IUser
  test: string
}

export const useLocalStorage = new LocalStorageService<ILocalStorage>()
```
## API

This package provides a type-safe way to interact with the browser's `localStorage`. It ensures that the values stored are correctly typed, making it easier to manage data across your application.

### `setItem(key: string, value: T[keyof T]): void`

Stores a value under the specified key in local storage. The value is serialized to JSON.

**Example**

```typescript
useLocalStorage.setItem('user', { name: 'Alice', age: 30 });
```

### `getItem(key: string): T[keyof T] | null`

Retrieves the value associated with the specified key. The value is deserialized from JSON.

**Example**

```typescript
const user = useLocalStorage.getItem('user');
console.log(user); // { name: 'Alice', age: 30 }
```

### `removeItem(key: string): void`

Removes the specified key from local storage.

**Example**

```typescript
useLocalStorage.removeItem('user');
```

### `clear(): void`

Clears all items in local storage.

**Example**

```typescript
useLocalStorage.clear();
```

## License

MIT