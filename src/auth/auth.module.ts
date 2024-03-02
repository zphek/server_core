import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [AuthController],
  imports: [UsersService]
})
export class AuthModule {}
