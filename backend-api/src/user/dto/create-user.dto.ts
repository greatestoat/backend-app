// src/user/dto/user.dto.ts
export class CreateUserDto {
  username: string;
  password: string;
  email: string; // Add this line
}

export class UpdateUserDto {
  username?: string;
  password?: string;
  email?: string; // If you want to allow updating the email as well
}
