import { UserModule } from './../user/user.module';
import { FollowersOfuser } from './entities/followers-ofuser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FollowersOfuserService } from './followers-ofuser.service';
import { FollowersOfuserResolver } from './followers-ofuser.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FollowersOfuser]), UserModule],
  providers: [FollowersOfuserResolver, FollowersOfuserService],
})
export class FollowersOfuserModule {}
