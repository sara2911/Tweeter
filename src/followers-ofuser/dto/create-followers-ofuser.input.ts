import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFollowersOfuserInput {
  @Field()
  idUserFollow: number;
  @Field()
  userId: number;
}
