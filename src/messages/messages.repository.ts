import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  // TODO: MESSAGES_REPOSITORY - FIND_ONE
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  // TODO: MESSAGES_REPOSITORY - FIND_ALL
  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  // TODO: MESSAGES_REPOSITORY - CREATE
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
