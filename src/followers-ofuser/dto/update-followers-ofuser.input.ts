import { CreateFollowersOfuserInput } from './create-followers-ofuser.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFollowersOfuserInput extends PartialType(CreateFollowersOfuserInput) {
  id: number;
}
