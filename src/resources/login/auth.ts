import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class Auth implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const header = req.headers.authorization;

      const [type, token] = header.split(' ');

      if (type !== 'Bearer' || !token) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'not exist',
          },

          HttpStatus.FORBIDDEN
        );
      }
      this.jwtService.verify(token);

      return true;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'UNAUTHORIZED',
        },

        HttpStatus.UNAUTHORIZED
      );
    }
  }
}
