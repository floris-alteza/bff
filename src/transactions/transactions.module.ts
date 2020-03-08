import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TransactionSchema } from './transaction.schema';

import { AccountsModule } from '../accounts/accounts.module';

@Module({
  imports: [
    forwardRef(() => AccountsModule),
    MongooseModule.forFeature([
      { name: 'Transaction', schema: TransactionSchema },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
