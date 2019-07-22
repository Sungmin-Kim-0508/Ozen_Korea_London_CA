import React, { Component } from "react";
import MenuPresenter from "./MenuPresenter";

let selectedMenuInfo = null;
export default class extends Component {
  state = {
    photoIndex: 0,
    checked: false,
    isModalOpened: false
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

  handleChangeMenuInfo = menuInfo => {
    // selectedMenuInfo = menuInfo;
    // console.log(selectedMenuInfo);
    // this.setState({
    //   selectedMenu: selectedMenuInfo
    // })
  };

  render() {
    const { photoIndex, checked, isModalOpened } = this.state;
    return (
      <MenuPresenter
        photoIndex={photoIndex}
        checked={checked}
        isModalOpened={isModalOpened}
        selectedMenuInfo={selectedMenuInfo}
        handleToggleCollapse={this.handleToggleCollapse}
        changeCheckedToFalse={this.changeCheckedToFalse}
        handleChangeMenuInfo={this.handleChangeMenuInfo}
        handleOpenModal={this.handleOpenModal}
        handleCloseModal={this.handleCloseModal}
      />
    );
  }
}
