import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button } from './ContactForm.styled';

const inputNameId = nanoid();
const inputNumberId = nanoid();

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.isUnique(e.currentTarget.elements.name.value)) {
      this.props.submitHandler(
        e.target.elements.name.value,
        e.target.elements.number.value
      );
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={inputNameId}>
          <span>Name</span>
        </label>
        <Input
          id={inputNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <label htmlFor={inputNumberId}>
          <span>Number</span>
        </label>
        <Input
          id={inputNumberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleNameChange}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
