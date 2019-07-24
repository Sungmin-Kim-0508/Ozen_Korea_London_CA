import React, { Component } from "react";
import MenuPresenter from "./MenuPresenter";

let selectedMenuInfo = null;
export default class extends Component {
  state = {
    photoIndex: 0,
    checked: false,
    isModalOpened: false,
    isMenuModalOpened: false
  };

  handleToggleCollapse = () => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };

  // When another menu is clicked, collapse the image
  changeCheckedToFalse = () => {
    this.setState({
      checked: false
    });
  };

  handleOpenModal = e => {
    this.setState({
      photoIndex: e.target.id,
      isModalOpened: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpened: false
    });
  };

  handleOpenMenuModal = () => {
    this.setState({
      photoIndex: 0,
      isMenuModalOpened: true
    });
  };

  handleCloseMenuModal = () => {
    this.setState({
      isMenuModalOpened: false
    });
  };

  componentDidMount() {
    // Scroll to top when move from Home to Menu
    window.scrollTo(0, 0);
  }

  render() {
    const {
      photoIndex,
      checked,
      isModalOpened,
      isMenuModalOpened
    } = this.state;

    return (
      <MenuPresenter
        photoIndex={photoIndex}
        checked={checked}
        isModalOpened={isModalOpened}
        isMenuModalOpened={isMenuModalOpened}
        selectedMenuInfo={selectedMenuInfo}
        handleToggleCollapse={this.handleToggleCollapse}
        changeCheckedToFalse={this.changeCheckedToFalse}
        handleChangeMenuInfo={this.handleChangeMenuInfo}
        handleOpenModal={this.handleOpenModal}
        handleOpenMenuModal={this.handleOpenMenuModal}
        handleCloseMenuModal={this.handleCloseMenuModal}
        handleCloseModal={this.handleCloseModal}
      />
    );
  }
}
