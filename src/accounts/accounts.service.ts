import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from '../interfaces/account.interface';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }

  findAll() {
    return this.accountModel.find().exec();
  }

  find(id: string) {
    return this.accountModel.findById(id).exec();
  }

  findByAccountNumber(accountNumber: string) {
    return this.accountModel.findOne({ accountNumber }).exec();
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    const options = { new: true, runValidators: true };
    return this.accountModel.findByIdAndUpdate(id, updateAccountDto, options);
  }
}
