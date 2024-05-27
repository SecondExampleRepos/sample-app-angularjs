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
    // Initialization logic if needed
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getMessageById(id: string): Message | undefined {
    return this.messages.find(message => message.id === id);
  }

  addMessage(message: Message): void {
    this.messages.push(message);
  }

  updateMessage(id: string, updatedContent: string): void {
    const message = this.getMessageById(id);
    if (message) {
      message.content = updatedContent;
    }
  }

  deleteMessage(id: string): void {
    this.messages = this.messages.filter(message => message.id !== id);
  }
}

export default MessagesService;