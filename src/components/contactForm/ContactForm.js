import React, { Component } from "react";
import PropTypes from "prop-types";
import {Form, Input, Button} from "./ContactFormStyled"

export default class ContactForm extends Component {
  
  static propTypes = { onAddContact: PropTypes.func.isRequired };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={this.handleChange}
          ></Input>
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            placeholder="123-45-678"
            onChange={this.handleChange}
          ></Input>
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
