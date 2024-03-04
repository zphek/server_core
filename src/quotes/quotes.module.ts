import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from 'src/db/entities/Quote';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  controllers: [QuotesController],
  providers: [QuotesService]
})
export class QuotesModule {}