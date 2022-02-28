import styled from 'styled-components'

export const StyledPriceCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2.6rem 4rem;
  background-color: ${props => props.proPlan ? '#000' : '#f5f5f5'};
  color: ${props => props.proPlan ? '#fff' : ''};
  position: relative;
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
      width: 85%;
      padding: 1.2rem 0;
  }
  .hero-border {
    max-width: 100%;
  }
`;