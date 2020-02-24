import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { TransactionsService } from './transactions.service';
import { AccountsService } from '../accounts/accounts.service';

import { CreateTransactionDto } from './dto/request.body.dto';
import { PopulatedTransactionDto, TransactionDto } from './dto/response.dto';
import { AccountIdDto } from './dto/request.params.dto';

@Controller('accounts/:accountId/transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly accountsService: AccountsService,
  ) {}

  @Get()
  async findAllFromAccont(
    @Param() { accountId }: AccountIdDto,
  ): Promise<PopulatedTransactionDto[]> {
    const transactions = await this.transactionsService.findAll(accountId);
    if (!transactions) {
      throw new NotFoundException();
    }
    // typescript doesnt understand the populated transactions
    return transactions as any;
  }

  @Post()
  async create(
    @Param() { accountId }: AccountIdDto,
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionDto> {
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
        throw new NotFoundException('To Account not found');
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
