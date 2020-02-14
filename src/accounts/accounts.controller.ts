import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { IdDto } from './dto/id.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { ResponseAccountDto } from './dto/response-account.dto';
import { AccountsService } from './accounts.service';
import { Account } from '../interfaces/account.interface';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: ResponseAccountDto,
    isArray: true,
  })
  async findAll(): Promise<Account[]> {
    try {
      return await this.accountsService.findAll();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: ResponseAccountDto,
  })
  async find(@Param() { id }: IdDto): Promise<Account> {
    const account = await this.accountsService.find(id);
    if (!account) {
      throw new NotFoundException();
    }
    return account;
  }

  @Post()
  @ApiResponse({
    status: 201,
    type: ResponseAccountDto,
  })
  async create(@Body() createAccountDto: CreateAccountDto) {
    try {
      const newAccount = await this.accountsService.create(createAccountDto);
      return newAccount;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  @Patch(':id')
  async update(
    @Param() { id }: IdDto,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    try {
      return await this.accountsService.update(id, updateAccountDto);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
