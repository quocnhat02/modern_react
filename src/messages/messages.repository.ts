import { readFile, writeFile } from 'fs/promises';

readFile;

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {}

  async create(message: string) {}
}
