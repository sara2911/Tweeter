import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { TweetService } from './tweet.service';
import { CreateTweetInput } from './dto/create-tweet.input';
import { UpdateTweetInput } from './dto/update-tweet.input';
import { Tweet } from './entities/tweet.entity';
import { UserType } from 'src/user/user.Type';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/user/Autho.gard';

@Resolver(() => Tweet)
export class TweetResolver {
  constructor(private readonly tweetService: TweetService) {}

  @Mutation(() => Tweet)
  @UseGuards(new AuthGuard())
  async createTweet(
    @Context('User') user: User,
    @Args('createTweetInput') createTweetInput: CreateTweetInput,
  ) {
    return this.tweetService.create(createTweetInput);
  }

  // @Query(() => [Tweet])
  // findAll(): Promise<Tweet[]> {
  //   return this.tweetService.findAll();
  // }
  @ResolveField(() => User)
  User(@Parent() tweet: Tweet): Promise<User> {
    return this.tweetService.GetUser(tweet.userId);
  }

  // @Query('tweet')
  // findOne(@Args('id') id: number) {
  //   return this.tweetService.findOne(id);
  // }

  // @Mutation('updateTweet')
  // update(@Args('updateTweetInput') updateTweetInput: UpdateTweetInput) {
  //   return this.tweetService.update(updateTweetInput.id, updateTweetInput);
  // }

  // @Mutation('removeTweet')
  // remove(@Args('id') id: number) {
  //   return this.tweetService.remove(id);
  // }
}
