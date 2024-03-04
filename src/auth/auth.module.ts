import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { AuthServices } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, JwtModule.register({
    global: true,
    secret: '20040915',
    signOptions: { expiresIn: '2h' },
  }),],
  controllers: [AuthController],
  providers: [AuthServices]
})
export class AuthModule {}