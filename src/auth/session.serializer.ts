import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: Function): any {
    console.log('serialize',user)
    done(null, user);
  }

  deserializeUser(payload: any, done: Function): any {
    console.log('deserialize payload',payload)
    done(null, payload);
  }
}
