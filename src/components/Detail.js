import React from "react";
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from './Button';

const Detail = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          id,
          title,
          img,
          price,
          artist,
          year,
          info,
          inCart
        } = value.detailAlbum;
        return (
          <DetailContainer>
            <div className="img-container">
              <img src={img} alt={title} className="detail__img" />
            </div>
            <div className="detail__text">
              <h1 className="detail__title">專輯：{title}</h1>
              <h3>藝人: {artist}</h3>
              <h3>年份: {year}</h3>
              <h3>售價: $ {price}</h3>
              <div className="buttons">
                <Link to="/">
                  <StyledButton className="btn-back">繼續購物</StyledButton>
                </Link>
                <StyledButton
                  disabled={inCart ? true : false} // disable button if album is in cart.
                  className="btn-cart"
                  onClick={() => value.addToCart(id)}
                  cart
                >
                  {inCart ? "已加入" : "購買"}
                </StyledButton>
              </div>
              <div className="detail__info">
                <p>{info}</p>
              </div>
            </div>
          </DetailContainer>
        );
      }}
    </ProductConsumer>
  );
};

export default Detail;


const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  justify-content: center;

  .img-container {
    padding: 1rem 3rem;
    max-width: 50%;
  }

  .detail__img {
    width: 100%;
  }

  .detail__text {

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    h3 {
      font-weight: 300;
    }

    .buttons {
      margin: 1rem 0;
    }

    .detail__info {
      max-width: 30rem;
    }
  }
`;
