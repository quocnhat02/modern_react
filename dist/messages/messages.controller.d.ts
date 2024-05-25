import { CreateMessageDto } from './dtos/create-message.dto';
export declare class MessagesController {
    listMessages(): string;
    createMessage(body: CreateMessageDto): CreateMessageDto;
    getMessage(id: string): string;
}
