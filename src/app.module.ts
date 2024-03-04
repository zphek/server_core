import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';
import { ServicesModule } from './services/services.module';
import { QuotesModule } from './quotes/quotes.module';
import { AccountsReceivableModule } from './accounts_receivable/accounts_receivable.module';
import { DatabaseModule } from './db/db.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [UsersModule, ProfilesModule, AuthModule, ProductsModule, ClientsModule, ServicesModule, QuotesModule, AccountsReceivableModule, DatabaseModule, CloudinaryModule],
})
export class AppModule {}