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
    // Initialize with some default messages or fetch from an API
    this.messages = [
      { id: '1', content: 'Hello World', sender: 'User1', timestamp: new Date() },
      { id: '2', content: 'Hi there', sender: 'User2', timestamp: new Date() },
    ];
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getMessageById(id: string): Message | undefined {
    return this.messages.find(message => message.id === id);
  }

  addMessage(content: string, sender: string): void {
    const newMessage: Message = {
      id: (this.messages.length + 1).toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    this.messages.push(newMessage);
  }

  deleteMessage(id: string): void {
    this.messages = this.messages.filter(message => message.id !== id);
  }
}

export default MessagesService;