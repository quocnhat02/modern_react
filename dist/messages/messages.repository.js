"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRepository = void 0;
const promises_1 = require("fs/promises");
promises_1.readFile;
class MessagesRepository {
    async findOne(id) {
        const contents = await (0, promises_1.readFile)('message.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async findAll() { }
    async create(message) { }
}
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=messages.repository.js.map