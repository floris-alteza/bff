import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { TransactionsService } from './transactions.service';
import { AccountsService } from '../accounts.service';
import { Transaction } from '../interfaces/transaction.interface';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { ResponseTransactionsDto } from './dto/response-transactions.dto';
import { ResponseCreateTransactionDto } from './dto/response-create-transaction.dto';
import { AccountIdDto } from './dto/accountId.dto';

@Controller('accounts/:accountId/transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly accountsService: AccountsService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: ResponseTransactionsDto,
    isArray: true,
  })
  async findAllFromAccont(
    @Param() { accountId }: AccountIdDto,
  ): Promise<Transaction[]> {
    const transactions = await this.transactionsService.findAll(accountId);
    if (!transactions) {
      throw new NotFoundException();
    }
    return transactions;
  }

  @Post()
  @ApiResponse({
    status: 201,
    type: ResponseCreateTransactionDto,
  })
  async create(
    @Param() { accountId }: AccountIdDto,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    const { to, amount } = createTransactionDto;
    try {
      const [fromAccount, toAccount] = await Promise.all([
        this.accountsService.find(accountId),
        this.accountsService.findByAccountNumber(to),
      ]);
      if (!fromAccount) {
        throw new NotFoundException('From Account not found');
      }
      if (!toAccount) {
        throw new NotFoundException('From Account not found');
      }
      const newTransaction = await this.transactionsService.create(
        fromAccount,
        toAccount,
        amount,
      );
      return newTransaction;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
