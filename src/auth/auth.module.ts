import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { AuthServices } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/db/entities/User';

@Module({
  imports: [UsersModule, JwtModule.register({
    global: true,
    secret: SECRET,
    signOptions: { expiresIn: '10h' }
  }), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthServices]
})
export class AuthModule {}