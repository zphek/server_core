import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';
import { ServicesModule } from './services/services.module';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesModule } from './quotes/quotes.module';
import { AccountsReceivableController } from './accounts_receivable/accounts_receivable.controller';
import { AccountsReceivableService } from './accounts_receivable/accounts_receivable.service';
import { AccountsReceivableModule } from './accounts_receivable/accounts_receivable.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './db/entities/User';
import { Client } from './db/entities/Client';
import { DatabaseModule } from './db/db.module';

@Module({
  imports: [UsersModule, ProfilesModule, AuthModule, ProductsModule, ClientsModule, ServicesModule, QuotesModule, AccountsReceivableModule, DatabaseModule],
})
export class AppModule {}
