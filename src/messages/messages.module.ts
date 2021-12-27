import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  // cose che devono essere usate come dipendenze per altre classi, sono entrambi INJECTABLE()
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
