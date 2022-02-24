import styled from 'styled-components'

export const StyledPriceCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2.6rem 4rem;
  background-color: #f5f5f5;
  .price-plan-desc {
    h2 {
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
    }
  }
  .price-amount {
      margin: 4rem 0;
      display: flex;
      flex-direction: column;
  }
  button {
      width: 80%;
      padding: 1.2rem 0;
  }
`;