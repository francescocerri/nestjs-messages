import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create.message.dto';
import { MessagesService } from './messages.service';
// class decorator
@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  // method decorator
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  // @Body argument decorator, estrarrà il body della richiesta
  // il type del body sarà il dto, che comprende anche le validazioni
  createMessage(@Body() body: CreateMessageDto) {
    const { content } = body;
    return this.messagesService.create(content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) throw new NotFoundException('Message not found');

    return message;
  }
}
