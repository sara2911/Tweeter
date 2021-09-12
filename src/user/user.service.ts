import { UserType } from './user.Type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserInput);
    return this.userRepository.save(newUser);
  }
  getUserByEmail(email: string) {
    return this.userRepository.findOneOrFail({ email });
  }
  CreateToken(createUserInput: CreateUserInput) {
    const email = createUserInput.email;
    return jwt.sign({ email }, 'secret');
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['tweets'],
    });
  }

  findOneUser(id: number): Promise<User> {
    return this.userRepository.findOne(id, {
      relations: ['tweets', 'followersOfuser'],
    });
  }
  // findfollowingOfUser(id: number): Promise<User[]> {
  //   return this.userRepository.findOne(id, { relations: ['followersOfuser'] });
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
