import React from 'react';
import { ProductConsumer } from '../Context';
import styled from 'styled-components';
import { StyledButton } from './Button';
import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <ProductConsumer>
      {value => {
        const { title, img, artist, price } = value.modalAlbum;

        if (!value.modalOpen) {
          return null
        } else {
          return (
            <ModalContainer>
              <div className="modal">
                <h3 className="modla__title">{title}</h3>
                <img src={img} alt={title} />
                <h3 className="modal__artist">{artist}</h3>
                <h3 className="modal__price">${price}</h3>
                <div className="button-container">
                  <Link to="/">
                    <StyledButton onClick={value.closeModal}>
                      繼續購物
                    </StyledButton>
                  </Link>
                  <Link to="/cart">
                    <StyledButton cart onClick={value.closeModal}>
                      查看購物籃
                    </StyledButton>
                  </Link>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }
      }
    </ProductConsumer>
  )
}

export default Modal;


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);

  .modal {
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    padding: 1rem;
    text-align: center;

    img {
      width: 100%;
    }

    .button-container {
      margin-top: 1rem;
    }
  }
`;