import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onAddContact: PropTypes.func,
    onCheckContact: PropTypes.func,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;
    const isValidateForm = this.validateForm();
    if (!isValidateForm) {
      this.reset();
      return;
    }
    onAddContact({ id: uuidv4(), name, number });
    this.reset();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckContact } = this.props;
    if (!name.trim() || !number.trim()) {
      alert('Для добавления контакта заполните поля Name и Number');
      return false;
    }
    return onCheckContact(name);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Введите имя контакта"
              onChange={this.handleChange}
              autoFocus
            />
          </label>
          <label htmlFor="">
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              placeholder="Введите номер контакта"
              onChange={this.handleChange}
            />
          </label>
          <button>Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
