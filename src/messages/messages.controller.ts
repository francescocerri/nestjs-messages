import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { identity } from 'rxjs';

// class decorator
@Controller('messages')
export class MessagesController {
  // method decorator
  @Get()
  listMessages() {}
  @Post()
  // @Body argument decorator, estrarrà il body della richiesta
  createMessage(@Body() body: any) {
    console.log(body);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
