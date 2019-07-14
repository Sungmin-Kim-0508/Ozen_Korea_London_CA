import React, { Component } from "react";
import MenuPresenter from "./MenuPresenter";

export default class extends Component {
  state = {
    checked: false
  };

  handleToggleCollapse = () => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };

  changeCheckedToFalse = () => {
    this.setState({
      checked: false
    });
  };

  render() {
    const { checked } = this.state;
    return (
      <MenuPresenter
        checked={checked}
        handleToggleCollapse={this.handleToggleCollapse}
        changeCheckedToFalse={this.changeCheckedToFalse}
      />
    );
  }
}
