import React from "react";
import styled from "styled-components";
import MenuCarousel from "./MenuCarousel";
import Modal from "@material-ui/core/Modal";

const MenuImages = ({
  menu,
  photoIndex,
  isModalOpened,
  handleOpenModal,
  handleCloseModal
}) => {
  return (
    <>
      {menu.map((item, index) => (
        <Image
          key={item.id}
          imageUrl={item.imageUrl}
          id={index}
          // append the event where modal is opened when clicked.
          // handleOpenModal comes from MenuContainer.js
          onClick={handleOpenModal}
        />
      ))}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isModalOpened}
        onClose={handleCloseModal}
      >
        <OzenStepperWrapper>
          <MenuCarousel menuObj={menu} photoIndex={photoIndex} />
        </OzenStepperWrapper>
      </Modal>
    </>
  );
};

const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 17px 11px 28px -15px rgba(0, 0, 0, 0.45);
  cursor: pointer;
`;

const OzenStepperWrapper = styled.div`
  display: block;
  margin: 5rem auto 8rem auto;
  max-width: 600px;
  height: 22rem;

  color: white;

  @media (max-width: 500px) {
    margin: 4rem 1rem 3rem 1rem;
    height: 18rem;
  }
`;

export default MenuImages;
