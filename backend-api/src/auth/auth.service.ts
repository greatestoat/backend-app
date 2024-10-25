import { User } from '../user/user.entity'; // Adjust the path accordingly
import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(loginDto: { username: string; password: string; }) {
    throw new Error('Method not implemented.');
  }
  async validateUser(username: string, pass: string): Promise<Omit<User, 'password'> | null> {
    const user: User | null = await this.findUserByUsername(username); // Fetch user by username

    if (user) {
      // Ensure user.password is a string and pass is a string
      const isPasswordMatching = await bcrypt.compare(pass, user.password);

      if (isPasswordMatching) {
        const { password, ...result } = user; // Omit password from result
        return result; // Return user data without password
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
    }
    
    return null; // User not found
  }

  // Example method to find user (you need to implement this)
  private async findUserByUsername(username: string): Promise<User | null> {
    // Implement fetching user logic from your database here
    return null; // Placeholder
  }
}
