export declare class MessagesRepository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<void>;
    create(message: string): Promise<void>;
}
