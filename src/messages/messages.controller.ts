import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create.message.dto';

// class decorator
@Controller('messages')
export class MessagesController {
  // method decorator
  @Get()
  listMessages() {}
  @Post()
  // @Body argument decorator, estrarrà il body della richiesta
  // il type del body sarà il dto, che comprende anche le validazioni
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
