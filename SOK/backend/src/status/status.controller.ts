import { Body, Controller, Get, Post } from "@nestjs/common";
import { StatusService } from "./status.service";
import { CreateStatusDto } from "./dto/create-status.dto";

@Controller("status")
export class StatusController {
  constructor(private usersStatusService: StatusService) {}

  @Post()
  create(@Body() statusDto: CreateStatusDto) {
    return this.usersStatusService.createStatus(statusDto);
  }

  @Get()
  getAll() {
    return this.usersStatusService.getAllStatus();
  }
}
