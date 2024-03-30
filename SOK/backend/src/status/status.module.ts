import { Module } from "@nestjs/common";
import { StatusService } from "./status.service";
import { StatusController } from "./status.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Status } from "./status.model";
import { UserMsg } from "src/user-msg/user-msg.model";

@Module({
  providers: [StatusService],
  controllers: [StatusController],
  imports: [SequelizeModule.forFeature([UserMsg, Status])],
})
export class StatusModule {}
