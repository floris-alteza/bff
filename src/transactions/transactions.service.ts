import { Model, Connection } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';

import { AccountsService } from '../accounts.service';
import { Transaction } from '../interfaces/transaction.interface';
import { Account } from 'src/interfaces/account.interface';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    private readonly accountsService: AccountsService,
    @InjectModel('Transaction')
    private readonly transactionModel: Model<Transaction>,
  ) {}

  async findAll(userId: string) {
    const account = await this.accountsService.find(userId);
    return this.transactionModel
      .find({
        $or: [{ from: account._id }, { to: account._id }],
      })
      .populate({
        path: 'from',
        select: ['initials', 'lastname', 'accountNumber'],
      })
      .populate({
        path: 'to',
        select: ['initials', 'lastname', 'accountNumber'],
      });
  }

  async create(from: Account, to: Account, amount: number) {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const newTransaction = new this.transactionModel({
        from: from._id,
        to: to._id,
        amount,
      });

      // mutate both accounts if they exist
      const [transaction] = await Promise.all([
        newTransaction.save(),
        from.changeBalance(-amount),
        to.changeBalance(amount),
      ]);

      await session.commitTransaction();
      return transaction;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}
