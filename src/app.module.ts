import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
  imports: [UsersModule, AuthModule, RedisCacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
