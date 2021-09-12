import { UserService } from './../user/user.service';
import { FollowersOfuser } from './entities/followers-ofuser.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFollowersOfuserInput } from './dto/create-followers-ofuser.input';
import { UpdateFollowersOfuserInput } from './dto/update-followers-ofuser.input';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class FollowersOfuserService {
  constructor(
    @InjectRepository(FollowersOfuser)
    private followerRepository: Repository<FollowersOfuser>,
    private userService: UserService,
  ) {}
  create(createFollowersOfuserInput: CreateFollowersOfuserInput) {
    return 'This action adds a new followersOfuser';
  }

  AllfollowerOfUserId(Id: number) {
    return this.followerRepository.find({ idUserFollow: Id });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} followersOfuser`;
  // }
  async GetUser(id: number): Promise<User> {
    return this.userService.findOneUser(id);
  }
  // update(id: number, updateFollowersOfuserInput: UpdateFollowersOfuserInput) {
  //   return `This action updates a #${id} followersOfuser`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} followersOfuser`;
  // }
}
