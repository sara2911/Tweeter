import { Test, TestingModule } from '@nestjs/testing';
import { FollowersOfuserService } from './followers-ofuser.service';

describe('FollowersOfuserService', () => {
  let service: FollowersOfuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowersOfuserService],
    }).compile();

    service = module.get<FollowersOfuserService>(FollowersOfuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
