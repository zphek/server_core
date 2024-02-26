import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [UsersModule, ProfilesModule, AuthModule, ProductsModule, ClientsModule, ServicesModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
