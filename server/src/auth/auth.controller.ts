import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entity';
import { Public } from './decorators/public.decorator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.name, signInDto.password);
  }
  @Public()
  @Post('signup')
  signUp(@Body() signupDto: CreateUserDto) {
    return this.authService.signUp(signupDto);
  }
}