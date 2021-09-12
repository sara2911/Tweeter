import { AuthGuard } from './Autho.gard';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserType } from './user.Type';
import { UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  @UseGuards(new AuthGuard())
  sayHello(@Context('User') user: User) {
    return 'jjjjjjjjjj';
  }
  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }
  @Mutation(() => String)
  async login(@Args('email') email: string) {
    const _user = await this.userService.getUserByEmail(email);
    // if (!_user) {
    //   _user = await this.userService.create(createUserInput);
    // }
    return this.userService.CreateToken(_user);
  }

  @Query(() => [User])
  findAllUser(): Promise<User[]> {
    return this.userService.findAllUser();
  }

  @Query(() => User)
  findOneUser(@Args('id') id: number): Promise<User> {
    return this.userService.findOneUser(id);
  }

  // @Mutation('updateUser')
  // update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.userService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation('removeUser')
  // remove(@Args('id') id: number) {
  //   return this.userService.remove(id);
  // }
}
