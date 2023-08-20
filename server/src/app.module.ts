import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { ImageModule } from './image/image.module';
import { PersonModule } from './person/person.module';
import { Person } from './person/entities/person.entity';
import { Image } from './image/entities/image.entity';

@Module({
  imports: [UserModule, CategoryModule, AuthModule, PersonModule, ImageModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'photo',
      entities: [User, Category, Person, Image],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}

