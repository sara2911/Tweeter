import { Field, ObjectType } from '@nestjs/graphql';
import { Tweet } from 'src/tweet/entities/tweet.entity';

@ObjectType()
export class UserType {
  @Field()
  id: number;
  @Field({ nullable: true })
  name?: string;
  @Field()
  email: string;
  // @Field(() => [Tweet], { nullable: true })
  // tweets?: Tweet[];
}
