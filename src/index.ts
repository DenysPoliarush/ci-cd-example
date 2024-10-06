class LocalStorageService<T> {
  private localStorage: Storage

  constructor () {
    this.localStorage = window?.localStorage

    if (!this.localStorage) {
      throw Error('Local Storage not found')
    }
  }

  hasKey<K extends keyof T & string> (key: K): boolean {
    return this.localStorage.getItem(key) !== null
  }

  getItem<K extends keyof T & string> (key: K): T[keyof T] | null {
    const item = this.localStorage.getItem(key)
    return item !== null ? JSON.parse(item) : null
  }

  setItem<K extends keyof T & string> (key: K, data: T[keyof T]): void {
    this.localStorage.setItem(key.toString(), JSON.stringify(data))
  }

  removeItem<K extends keyof T & string> (key: K): void {
    this.localStorage.removeItem(key.toString())
  }

  clear (): void {
    this.localStorage.clear()
  }
}

export default LocalStorageService
