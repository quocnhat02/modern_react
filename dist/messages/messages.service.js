"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const messages_repository_1 = require("./messages.repository");
class MessagesService {
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
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map