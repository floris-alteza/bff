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

import { AccountsService } from './accounts.service';

import { IdDto } from './dto/request.params.dto';
import { UpdateAccountDto, CreateAccountDto } from './dto/request.body.dto';
import { AccountDto } from './dto/response.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async findAll(): Promise<AccountDto[]> {
    try {
      return await this.accountsService.findAll();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  async find(@Param() { id }: IdDto): Promise<AccountDto> {
    const account = await this.accountsService.find(id);
    if (!account) {
      throw new NotFoundException();
    }
    return account;
  }

  @Post()
  async create(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<AccountDto> {
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
