/**
 * This cache service base class can be used to give caching capabilities to any
 * service.
 */
export abstract class CacheService {
  protected getItem<T>(key: string): T {
    const data = localStorage.getItem(key)
    if (data != null) {
      return JSON.parse(data)
    }
  }

  protected setItem(key: string, data: object | string): void {
    if (typeof data === 'string') {
      localStorage.setItem(key, data)
    }
    localStorage.setItem(key, JSON.stringify(data))
  }

  protected removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  protected clear(): void {
    localStorage.clear()
  }
}
