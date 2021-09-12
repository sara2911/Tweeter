import { Test, TestingModule } from '@nestjs/testing';
import { FollowersOfuserResolver } from './followers-ofuser.resolver';
import { FollowersOfuserService } from './followers-ofuser.service';

describe('FollowersOfuserResolver', () => {
  let resolver: FollowersOfuserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowersOfuserResolver, FollowersOfuserService],
    }).compile();

    resolver = module.get<FollowersOfuserResolver>(FollowersOfuserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
