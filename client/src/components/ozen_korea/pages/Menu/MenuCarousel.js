import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

class MenuCarousel extends Component {
  state = {
    activeStep: parseInt(this.props.photoIndex)
  };
  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };
  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };
  render() {
    const { activeStep } = this.state;
    const { menuObj } = this.props;
    const maxStep = menuObj.length;
    const nextBtn = (
      <Button
        size="small"
        onClick={this.handleNext}
        disabled={activeStep === maxStep - 1}
      >
        Next
        <KeyboardArrowRight />
      </Button>
    );
    const backBtn = (
      <Button
        size="small"
        onClick={this.handleBack}
        disabled={activeStep === 0}
      >
        <KeyboardArrowLeft />
        Back
      </Button>
    );
    const menuNameAndPrice =
      menuObj[activeStep].food_name === undefined ? null : (
        <Ozen_Paper square elevation={0}>
          <span className="menu_name">{menuObj[activeStep].food_name}</span>
          <br />
          <span className="price">$ {menuObj[activeStep].price}</span>
        </Ozen_Paper>
      );
    return (
      <>
        {menuNameAndPrice}
        <OzenStepperImage
          src={menuObj[activeStep].imageUrl}
          alt={menuObj[activeStep].food_name}
        />

        <MobileStepper
          steps={maxStep}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={nextBtn}
          backButton={backBtn}
        />
      </>
    );
  }
}

const OzenStepperImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 500px) {
    height: 100%;
  }
`;

const Ozen_Paper = styled(Paper)`
  text-align: center;
  font-size: 1.5rem;
  background-color: black;
  color: white;

  > .price {
    color: #debe07;
  }
`;

export default MenuCarousel;
