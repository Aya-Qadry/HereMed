import { Body, Controller, Post ,Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    // cree un use
    @Post()
    create(@Body() body: any) {

    }

    @Get()
    findAll() {

    }
  
}
