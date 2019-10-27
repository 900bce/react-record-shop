import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return <TitleWrapper className="main__title">{title}</TitleWrapper>
}

export default Title;

const TitleWrapper = styled.h1`
  text-align: center;
  font-weight: 300;
  margin-top: 2rem;
  letter-spacing: 3px;
  font-size: 2.5rem;
`;