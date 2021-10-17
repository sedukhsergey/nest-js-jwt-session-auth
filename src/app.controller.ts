import { Controller, Get, Post, Req, Session, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req): Promise<any> {
    const user = await this.authService.login(req.user);
    return {
      ...user,
      sessionId: req.sessionID,
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(
    @Session() session: Record<string, any>,
    @Req() req
): any {
    console.log('protected req.user',req.user)
    return req.user;
  }
}
