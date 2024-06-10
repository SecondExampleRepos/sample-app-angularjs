// react/src/services/Contacts.ts

interface Contact {
  id: number;
  name: string;
  email: string;
  // Add other contact properties as needed
}

class ContactsService {
  private contacts: Contact[] = [];

  constructor() {
    // Initialize with some default contacts or fetch from an API
    this.contacts = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ];
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  updateContact(id: number, updatedContact: Partial<Contact>): void {
    const contactIndex = this.contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
      this.contacts[contactIndex] = { ...this.contacts[contactIndex], ...updatedContact };
    }
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}

export default new ContactsService();