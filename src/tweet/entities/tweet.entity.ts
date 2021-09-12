import { User } from './../../user/entities/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@ObjectType()
@Entity('tweet')
export class Tweet {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;
  @Column()
  @Field()
  tweet: string;
  @ManyToOne(() => User, (User) => User.tweets)
  @Field(() => User)
  User: User;

  @Field()
  @Column()
  userId: number;
}
