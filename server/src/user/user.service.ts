import { BadRequestException, ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(CreateUserDto: CreateUserDto) {
    const find = await this.findOne(CreateUserDto.name);
    if (find)
      throw new BadRequestException("userName already exists");
    //if one of the data not valid return false
    if (!((this.isStrongPassword(CreateUserDto.password)) && (CreateUserDto.email === '' || this.ValidateEmail(CreateUserDto.email)))) {
      throw new BadRequestException("one of the data is wrong");
    }
    const user = new User();
    user.user_email = CreateUserDto.email;
    user.user_name = CreateUserDto.name;
    user.user_password = await bcrypt.hash(CreateUserDto.password, 10);
    return await this.usersRepository.insert(user);
  }
  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(name: string) {
    return await this.usersRepository.findOneBy({ user_name: name });
  }
  async findOneById(id: number) {
    return await this.usersRepository.findOneBy({ iduser: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  isStrongPassword(password: string): boolean {
    // Regular expressions to check for a strong password
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;

    // Check if the password meets the requirements
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);

    return (
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      password.length >= 8
    );
  }
  ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }
}
