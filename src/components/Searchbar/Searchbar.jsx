import React, { Component } from 'react';
import { Header, Button, Input, Forma } from './Searchbar.styled';
import { toast } from 'react-toastify';
import { TfiSearch } from 'react-icons/tfi';
export class Searchbar extends Component {
  state = {
    search: ' ',
  };

  changeInput = event => {
    this.setState({ search: event.currentTarget.value.toLowerCase() });
  };

  submitForm = event => {
    event.preventDefault();
    if (this.state.search === ' ') {
      return toast.warn('You must enter symbol');
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: ' ' });
  };

  render() {
    return (
      <Header>
        <Forma onSubmit={this.submitForm}>
          <Button type="submit">
            <TfiSearch />
          </Button>
          <Input
            onChange={this.changeInput}
            value={this.state.search}
            name="search"
            className="input"
            type="text"
            placeholder="Search images and photos"
          />
        </Forma>
      </Header>
    );
  }
}
