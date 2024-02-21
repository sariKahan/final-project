import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { request } from 'http';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { log } from 'console';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async signIn(username, pass) {
        //מציאת המשתמש ע"י שם משתמש
        const user = await this.usersService.findOne(username);
        //כאשר השם משתמש או הסיסמא אינם נכונים - זורקים שגיאה
        if (!user || !(await bcrypt.compare(pass, user?.user_password)))
            throw new BadRequestException("No match between username and password found");
        const payload = { user: user };
        //token החזרת
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async signUp(createUserDto: CreateUserDto) {
        //יצירת משתמש חדש
        await this.usersService.create(createUserDto);
        //payload-מציאת המשתמש כדי להכניסו ל
        const user = await this.usersService.findOne(createUserDto.name);
        const payload = { user: user };
        //token החזרת
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

}

