import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { FollowersOfuserService } from './followers-ofuser.service';
import { CreateFollowersOfuserInput } from './dto/create-followers-ofuser.input';
import { UpdateFollowersOfuserInput } from './dto/update-followers-ofuser.input';
import { FollowersOfuser } from './entities/followers-ofuser.entity';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => FollowersOfuser)
export class FollowersOfuserResolver {
  constructor(
    private readonly followersOfuserService: FollowersOfuserService,
  ) {}

  // @Mutation('createFollowersOfuser')
  // create(
  //   @Args('createFollowersOfuserInput')
  //   createFollowersOfuserInput: CreateFollowersOfuserInput,
  // ) {
  //   return this.followersOfuserService.create(createFollowersOfuserInput);
  // }

  @Query(() => [FollowersOfuser])
  AllfollowerOfUser(
    @Args('idUserFollow') idUserFollow: number,
  ): Promise<FollowersOfuser[]> {
    return this.followersOfuserService.AllfollowerOfUserId(idUserFollow);
  }
  @ResolveField(() => User)
  User(@Parent() FollowersOfuser: FollowersOfuser): Promise<User> {
    return this.followersOfuserService.GetUser(FollowersOfuser.userId);
  }
  // @Query(() => [FollowersOfuser])
  // findAllFollwerOfUserId(@Args('userId') userId: number): Promise<FollowersOfuser[]> {
  //   return this.followersOfuserService.findAllfollowerOfUserId(userId);
  // }

  // @Query('followersOfuser')
  // findOne(@Args('id') id: number) {
  //   return this.followersOfuserService.findOne(id);
  // }

  // @Mutation('updateFollowersOfuser')
  // update(
  //   @Args('updateFollowersOfuserInput')
  //   updateFollowersOfuserInput: UpdateFollowersOfuserInput,
  // ) {
  //   return this.followersOfuserService.update(
  //     updateFollowersOfuserInput.id,
  //     updateFollowersOfuserInput,
  //   );
  // }

  // @Mutation('removeFollowersOfuser')
  // remove(@Args('id') id: number) {
  //   return this.followersOfuserService.remove(id);
  // }
}
