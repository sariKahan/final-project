import { IsString, IsNotEmpty, IsNumber ,IsEmail, isNotEmpty} from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    password:string;
}
