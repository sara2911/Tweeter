import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field({ nullable: true })
  name?: string;
  @Field()
  email: string;
}
