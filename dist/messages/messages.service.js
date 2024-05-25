"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const messages_repository_1 = require("./messages.repository");
class MessageService {
    constructor() {
        this._messagesRepo = new messages_repository_1.MessagesRepository();
    }
    findOne(id) {
        return this._messagesRepo.findOne(id);
    }
    findAll() {
        return this._messagesRepo.findAll();
    }
    create(content) {
        return this._messagesRepo.create(content);
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=messages.service.js.map