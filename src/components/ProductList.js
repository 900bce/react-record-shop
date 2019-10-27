import React from 'react';
import { ProductConsumer } from '../Context';
import Product from './Product';
import styled from 'styled-components';
import Title from './Title';

const ProductList = () => {
  return (
    <ProductWrapper>
      <Title title="新到貨" />
      <div className="product-container">
        <ProductConsumer>
          {value => {
            return value.albums.map(item => {
              return <Product key={item.id} album={item} className="album" />
            })
          }}
        </ProductConsumer>
      </div>
    </ProductWrapper>
  );
}

export default ProductList;


const ProductWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  .product-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
`;