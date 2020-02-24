import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';

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
    AccountsModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
