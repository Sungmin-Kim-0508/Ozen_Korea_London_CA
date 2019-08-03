import React, { Component } from "react";
import MenuPresenter from "./MenuPresenter";

class MenuContainer extends Component {
  state = {
    photoIndex: 0,
    isMenuModalOpened: false
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
  render() {
    const { photoIndex } = this.state;
    return (
      <div>
        <MenuPresenter photoIndex={photoIndex} />
      </div>
    );
  }
}

export default MenuContainer;
