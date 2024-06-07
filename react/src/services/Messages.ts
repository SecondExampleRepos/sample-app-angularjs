// react/src/services/Messages.ts

export class Messages {
  constructor() {
    this.messages = [];
  }

  // Example method from the original AngularJS service
  getMessages() {
    // Placeholder implementation for fetching messages
        return fetch('/api/messages')
            .then(response => {
                if (!response.ok) {
  // Method to add a new message
  addMessage(message: string) {
    this.messages.push({ id: Date.now(), text: message });
  }

  // Method to delete a message by ID
  deleteMessage(messageId: number) {
    // Find the index of the message with the given ID
    const index = this.messages.findIndex(message => message.id === messageId);
    if (index !== -1) {
        // Remove the message from the array
        this.messages.splice(index, 1);
    this.messages = this.messages.map(msg => msg.id === messageId ? { ...msg, text: newMessage } : msg);
        console.error(`Message with ID ${messageId} not found.`);
    }
  }

  // Method to update a message by ID
  updateMessage(messageId: number, newMessage: string) {
    const index = this.messages.findIndex(message => message.id === messageId);
    if (index !== -1) {
      this.messages[index].text = newMessage;
    } else {
      console.error(`Message with ID ${messageId} not found.`);
    }
  }
                }
                return response.json();
            })
            .then(data => {
                // Process and return the data as needed
                return data;
            })
// Method to fetch a message by ID
getMessageById(messageId: number) {
  return fetch(`/api/messages/${messageId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Process and return the data as needed
      return data;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    });
}
                console.error('There was a problem with the fetch operation:', error);

  // Add other methods as needed
  // Method to clear all messages
  clearMessages() {
    this.messages = [];
  }
            });
  }

  // Add other methods as needed
  // Method to fetch all messages
  fetchAllMessages() {
    return fetch('/api/messages')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.messages = data;
        return data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      });
  }
}