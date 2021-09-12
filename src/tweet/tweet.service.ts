import { UserService } from './../user/user.service';
import { Tweet } from 'src/tweet/entities/tweet.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetInput } from './dto/create-tweet.input';
import { UpdateTweetInput } from './dto/update-tweet.input';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet) private tweeterRepository: Repository<Tweet>,
    private userService: UserService,
  ) {}
  async create(createTweetInput: CreateTweetInput) {
    const newTweet = this.tweeterRepository.create(createTweetInput);
    return this.tweeterRepository.save(newTweet);
  }

  async findAll(): Promise<Tweet[]> {
    return this.tweeterRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetInput: UpdateTweetInput) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
  async GetUser(id: number): Promise<User> {
    return this.userService.findOneUser(id);
  }
}
