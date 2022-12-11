import React from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterChange = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  checkIfNameIsUnique = name => {
    return this.state.contacts.every(contact => {
      if (contact.name === name) {
        alert(`${contact.name} is already in contacts`);
        return false;
      }
      return true;
    });
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts });
    } else {
      this.setState({
        contacts: [
          { id: '1', name: 'Rosie Simpson', number: '4591256' },
          { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
          { id: 'id-3', name: 'Eden Clements', number: '6451779' },
          { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
        ],
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filterNames = this.getFilterChange();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          submitHandler={this.formSubmitHandler}
          isUnique={this.checkIfNameIsUnique}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterNames}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
