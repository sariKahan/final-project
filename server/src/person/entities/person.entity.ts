import { Image } from 'src/image/entities/image.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, DeleteDateColumn } from 'typeorm';


@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  idperson: number;

  @Column()
  person_name: string;

  @ManyToOne(type=> User, user=>user.persons, { onDelete: 'CASCADE' })
  user: User;

  @ManyToMany(() => Image, (image) => image._, { onDelete: 'CASCADE' })
  images: Image[]
}
