import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, username: 'alice', password: 'password', email: 'alice@example.com' },
    { id: 2, username: 'bob', password: 'password', email: 'bob@example.com' },
    { id: 3, username: 'charlie', password: 'password', email: 'charlie@example.com' },
];


    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findOne(id: number): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new Error('User not found'); // Handle error as needed
        }
        return user;
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = { id: this.users.length + 1, ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }

    async update(id: number, user: Partial<User>): Promise<User> {
        const index = this.users.findIndex((u) => u.id === id);
        if (index === -1) {
            throw new Error('User not found');
        }
        const updatedUser = { ...this.users[index], ...user };
        this.users[index] = updatedUser;
        return updatedUser;
    }

    async delete(id: number): Promise<void> {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            throw new Error('User not found');
        }
        this.users.splice(index, 1);
    }
}