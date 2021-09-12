import { UserService } from './../user/user.service';
import { Tweet } from 'src/tweet/entities/tweet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetResolver } from './tweet.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet]), UserModule],
  providers: [TweetResolver, TweetService],
})
export class TweetModule {}
