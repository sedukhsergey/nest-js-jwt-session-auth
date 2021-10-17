import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache, CachingConfig } from 'cache-manager';

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get(key): Promise<string> {
    return await this.cache.get(key);
  }

  async del(key): Promise<string> {
    return await this.cache.del(key);
  }

  async getMany(keys: string[]): Promise<string[]> {
    return await this.cache.store.mget(keys);
  }

  async getKeys(): Promise<string[]> {
    return await this.cache.store.keys();
  }

  async reset(): Promise<void> {
    return await this.cache.reset();
  }

  async set(key, value, options: CachingConfig = { ttl: 0 }) {
    return await this.cache.set(key, value, options);
  }
}
