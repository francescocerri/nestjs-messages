import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

// Per la dependency injection, inseriscilo nel DI container/Injectors
@Injectable()
export class MessagesService {
  // messagesRepo: MessagesRepository;
  constructor(public messagesRepo: MessagesRepository) {
    // quando mettiamo public le 2 linee di codice commentate vengono create automaticamente
    // this.messagesRepo = messagesRepo;
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
