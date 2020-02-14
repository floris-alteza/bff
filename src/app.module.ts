import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AccountSchema } from './schemas/account.schema';
import { TransactionSchema } from './schemas/transaction.schema';

import { AccountsService } from './accounts/accounts.service';
import { AccountsController } from './accounts/accounts.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsController } from './transactions/transactions.controller';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get(
          'DATABASE_HOST',
        )}/${configService.get('DATABASE_DATABASE')}`,
        user: configService.get('DATABASE_USER'),
        pass: configService.get('DATABASE_PASSWORD'),
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: 'Account', schema: AccountSchema },
      { name: 'Transaction', schema: TransactionSchema },
    ]),
  ],
  controllers: [AccountsController, TransactionsController],
  providers: [AccountsService, TransactionsService],
})
export class AppModule {}
