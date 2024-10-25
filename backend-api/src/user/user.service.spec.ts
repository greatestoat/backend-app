import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should create a user', async () => {
    const user = await service.createUser({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    });
    expect(user).toHaveProperty('id');
    expect(user.username).toBe('testuser');
  });
});
