import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProfilesModule, AuthModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
