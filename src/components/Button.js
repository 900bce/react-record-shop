import styled from 'styled-components';

export const StyledButton = styled.button`
         padding: 0.2rem 0.5rem;
         margin-right: 0.5rem;
         background: transparent;
         font-size: 0.9rem;
         cursor: pointer;
         border-radius: 5px;
         border: 2px solid #2a2a72;
         border-color: ${props => (props.cart ? "orangered" : "#2a2a72")};
         color: ${props => (props.cart ? "orangered" : "#2a2a72")};

         &:focus {
           outline: none;
         }
       `;


