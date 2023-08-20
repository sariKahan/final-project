import { BadRequestException, Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase-admin/app';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { CategoryService } from 'src/category/category.service';
import { PersonService } from 'src/person/person.service';

const app = initializeApp();

@Injectable()
export class ImageService {

  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    private personService:PersonService,
    private categoryService: CategoryService
  ) { }

  async create(image: Image, user: User) {
    const find = (await this.findAll(user.iduser)).filter(img => img.image_name === image.image_name)[0];
    if (find)
      throw new BadRequestException(`the image name already exists`);
    if (await this.validCategoriesAndPersonsInImage(user, image))
      return await this.imageRepository.save(image);
  }

  async findAll(idUser: number): Promise<Image[]> {
    // return this.imageRepository.find(user);
    const images: Image[] = await this.imageRepository
      .createQueryBuilder('image')
      .leftJoinAndSelect('image.category', 'category')
      .leftJoinAndSelect('category.user', 'user')
      .leftJoinAndSelect('image._', 'person')
      .where('user.iduser = :idUser', { idUser })
      .getMany();
    return images;
  }

  async findOne(id: number, idUser: number) {
    const find = (await this.findAll(idUser)).filter(img => img.idimage === id)[0];
    if (!find)
      throw new BadRequestException(`this image not exists`);
    return find;
  }

  async update(id: number, image: Image, user: User) {
    await this.findOne(id, user.iduser);
    const find = (await this.findAll(user.iduser)).filter(img => img.image_name === image.image_name && img.idimage !== id)[0];
    if (find)
      throw new BadRequestException(`the image name already exists`);
    if (await this.validCategoriesAndPersonsInImage(user, image)) {
      image.idimage = id;
      return await this.imageRepository.save(image);
    }

  }

  async remove(id: number, idUser: number) {
    await this.findOne(id, idUser);
    return await this.imageRepository.delete(id);

  }

  private async validCategoriesAndPersonsInImage(user: User, image: Image): Promise<boolean> {
     await this.categoryService.findOne(user, image.category.idcategory);
     for(let person of image._){
      await this.personService.findOneById(person.idperson,user);
     }
    return true;
  }
}
