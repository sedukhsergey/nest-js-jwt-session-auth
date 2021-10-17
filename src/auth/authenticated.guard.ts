import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RedisCacheService } from '../redis-cache/redis-cache.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private readonly _redisCacheService: RedisCacheService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const sid = request.header('sid');
    if (sid) {
      const session: any = await this._redisCacheService.get(`sess:${sid}`);
      if (session) {
        request.user = session.passport.user;
        return true
      }
    }
    return request.isAuthenticated();
  }
}
