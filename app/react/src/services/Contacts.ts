// react/src/services/Contacts.ts

interface Contact {
  id: number;
  name: string;
  email: string;
  // Add other contact properties here
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

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}

export default new ContactsService();