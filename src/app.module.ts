import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountSchema } from './schemas/account.schema';
import { TransactionSchema } from './schemas/transaction.schema';

import { AccountsService } from './accounts/accounts.service';
import { AccountsController } from './accounts/accounts.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsController } from './transactions/transactions.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/alteza-bank-db', {
      useNewUrlParser: true,
      user: 'alteza',
      pass: 'testww',
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
