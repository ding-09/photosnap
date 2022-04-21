import styled from 'styled-components';

export const StyledPricing = styled.section`
  .price-card-group {
    margin: 6.4rem 2.5rem;
  }
  .price-plan-toggle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 70%;
    margin: 0 auto;
    font-weight: bold;
    font-size: 1.8rem;
    .checkbox {
      position: relative;
      width: 6.4rem;
      height: 3.2rem;
      border-radius: 15rem;

      input[type='checkbox'] {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 30;
        &:checked + .slider {
          background-color: #000;
          &:before {
            background-color: #fff;
            top: 0.4rem;
            transform: translateX(3rem);
          }
        }
      }
      .slider {
        position: absolute;
        border-radius: 15rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: 0.3s;
        background-color: ${(props) => props.theme.mainColors.lightGray};
        &:before {
          content: '';
          display: inline-block;
          position: absolute;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          top: 50%;
          left: 0.5rem;
          transform: translateY(-50%);
          background-color: #000;
          transition: 0.5s;
        }
      }
    }
  }
  .price-cards {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
  }
  .price-table {
    padding: 0 2.9rem;
    margin-bottom: 6.4rem;
  }
  .inactive-label {
    opacity: 0.6;
  }

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    .price-card-group {
      margin: 11rem 4rem;
    }
    .price-plan-toggle {
      max-width: 40%;
    }
  }

  @media (min-width: 1200px) {
    .price-card-group {
      margin: 11rem 9rem;
    }
    .price-plan-toggle {
      .checkbox {
        input[type='checkbox'] {
          cursor: pointer;
        }
      }
    }
    .price-cards {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;
