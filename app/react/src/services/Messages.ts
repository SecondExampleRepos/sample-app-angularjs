// react/src/services/Messages.ts

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
}

class MessagesService {
  private messages: Message[] = [];

  constructor() {
    // Initialize with some default messages if needed
    this.messages = [];
  }

  getAllMessages(): Message[] {
    return this.messages;
  }

  getMessageById(id: string): Message | undefined {
    return this.messages.find(message => message.id === id);
  }

  addMessage(message: Message): void {
    this.messages.push(message);
  }

  deleteMessage(id: string): void {
    this.messages = this.messages.filter(message => message.id !== id);
  }
}

export default new MessagesService();