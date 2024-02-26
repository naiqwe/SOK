import { Module } from '@nestjs/common';
import { UserMsgService } from './user-msg.service';
import { UserMsgController } from './user-msg.controller';

@Module({
  providers: [UserMsgService],
  controllers: [UserMsgController]
})
export class UserMsgModule {}
