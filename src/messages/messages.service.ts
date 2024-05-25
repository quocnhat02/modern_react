import { MessagesRepository } from './messages.repository';

export class MessageService {
  _messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    this._messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this._messagesRepo.findOne(id);
  }

  findAll() {
    return this._messagesRepo.findAll();
  }

  create(content: string) {
    return this._messagesRepo.create(content);
  }
}
