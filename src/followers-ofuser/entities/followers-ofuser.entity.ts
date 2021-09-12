import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class FollowersOfuser {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: number;
  @Column()
  @Field()
  idUserFollow: number;

  @ManyToOne(() => User, (User) => User.followersOfuser)
  @Field(() => User)
  User: User;

  @Column()
  @Field()
  userId: number;
}
