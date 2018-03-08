import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options: options}));
      }
    } catch(e) {
      //Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("component will unmount")
  }
  handleDeleteOptions() {
    this.setState(() => ({options: []}))
  }
  handleDeleteOptionSingular(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({selectedOption: option}))
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  handleModal() {
    this.setState(() => ({selectedOption: undefined}))
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header 
        subtitle={subtitle}
        />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          option={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOptionSingular={this.handleDeleteOptionSingular}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleModal={this.handleModal}
        />
      </div>
    )
  }
}

