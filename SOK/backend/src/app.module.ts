import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from "./auth/auth.module";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { UserAddressModule } from "./user-address/user-address.module";
import { OfferListModule } from "./offer-list/offer-list.module";
import { WishListModule } from "./wish-list/wish-list.module";
import { BookLiteraryModule } from "./book-literary/book-literary.module";
import { AutorModule } from "./autor/autor.module";
import { BookResponseModule } from './book-response/book-response.module';
import { UserMsgModule } from './user-msg/user-msg.module';
import { ExchangeListModule } from './exchange-list/exchange-list.module';
import { UserExchangeListModule } from './user-exchange-list/user-exchange-list.module';
import { UserListController } from './user-list/user-list.controller';
import { UserListService } from './user-list/user-list.service';
import { UserListModule } from './user-list/user-list.module';
import { UserValueCategoryModule } from './user-value-category/user-value-category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { StatusModule } from './status/status.module';
import * as path from "path";

@Module({
  controllers: [UserListController, CategoryController],
  providers: [UserListService, CategoryService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    FilesModule,
    UserAddressModule,
    OfferListModule,
    WishListModule,
    BookLiteraryModule,
    AutorModule,
    BookResponseModule,
    UserMsgModule,
    ExchangeListModule,
    UserExchangeListModule,
    UserListModule,
    UserValueCategoryModule,
    CategoryModule,
    StatusModule,
  ],
})
export class AppModule {}
