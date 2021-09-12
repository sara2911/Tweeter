import { FollowersOfuser } from './../../followers-ofuser/entities/followers-ofuser.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Tweet } from 'src/tweet/entities/tweet.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
@Entity('User')
@Unique(['email'])
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;
  @Column('text', { nullable: true })
  @Field({ nullable: true })
  name?: string;
  @Field()
  @Column()
  email: string;
  @OneToMany(() => Tweet, (tweet) => tweet.User)
  @Field(() => [Tweet], { nullable: true })
  tweets: Tweet[];
  @OneToMany(() => FollowersOfuser, (followersOfuser) => followersOfuser.User)
  @Field(() => [FollowersOfuser], { nullable: true })
  followersOfuser: FollowersOfuser[];
}
