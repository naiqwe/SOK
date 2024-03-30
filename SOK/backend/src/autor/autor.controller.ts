import { Body, Controller, Get, Post } from "@nestjs/common";
import { AutorService } from "./autor.service";
import { CreateAutorDto } from "./dto/create-autor.dto";

@Controller("autor")
export class AutorController {
  constructor(private autorService: AutorService) {}

  @Post()
  create(@Body() dto: CreateAutorDto) {
    return this.autorService.createAutor(dto);
  }

  @Get()
  getAll() {
    return this.autorService.getAllAutor();
  }
}
