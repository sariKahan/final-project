import { Category } from 'src/category/entities/category.entity';
import { Person } from 'src/person/entities/person.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  iduser: number;

  @Column()
  user_name: string;

  @Column()
  user_password: string;

  @Column()
  user_email?: string;

  @OneToMany(() => Category, (category) => category.user.iduser)
  categories?: Category[];

  @OneToMany(() => Person, (person) => person.user.iduser)
  persons?: Person[];
}