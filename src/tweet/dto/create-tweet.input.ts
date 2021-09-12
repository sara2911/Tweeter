import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTweetInput {
  @Field()
  tweet: string;
  @Field()
  userId: number;
}
