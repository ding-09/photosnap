import styled from 'styled-components';

export const StyledPriceCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: ${(props) => (props.proPlan ? '2.4rem 0' : '')};
  padding: 5rem 2.6rem 4rem;
  background-color: ${(props) => (props.proPlan ? '#000' : '#f5f5f5')};
  color: ${(props) => (props.proPlan ? '#fff' : '')};
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
  a {
    width: 100%;
  }

  /* BORDER STYLE */
  div:first-child {
    max-width: ${(props) => (props.proPlan ? '100%' : '')};
  }

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    padding: 4rem;
    .price-amount {
      position: absolute;
      top: 0;
      right: 4rem;
      align-items: flex-end;
    }
    .price-plan-desc {
      margin-bottom: 3.2rem;
    }
  }

  @media (min-width: 1200px) {
    align-items: center;
    text-align: center;
    margin: ${(props) => (props.proPlan ? '0 3rem' : '')};
    padding-top: ${(props) => (props.proPlan ? '6.5rem' : '')};
    min-height: ${(props) => (props.proPlan ? '47rem' : '40rem')};
    flex: ${(props) => (props.proPlan ? '33%' : '30%')};
    .price-amount {
      position: relative;
      align-items: center;
      right: 0;
    }
    .price-plan-desc,
    button {
      max-width: 100%;
    }
  }
`;
