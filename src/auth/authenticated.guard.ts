import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RedisCacheService } from '../redis-cache/redis-cache.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private readonly _redisCacheService: RedisCacheService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return request.isAuthenticated()
  }
}
