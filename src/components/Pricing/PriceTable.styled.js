import styled from 'styled-components';

export const StyledPriceTable = styled.table`
  width: 100%;
  text-align: left;
  text-transform: uppercase;
  caption {
    text-align: left;
    padding-bottom: 2.3rem;
    margin-bottom: 2.3rem;
    border-bottom: 1px solid #000;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
  tbody {
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
  }
  tr{
    display: flex;
  }
  th {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    width: 100%;
  }
  .row-container {
    padding-bottom: 2rem;
    border-bottom: 1px solid #dfdfdf;
  }
  .tier-name {
    td {
      flex: 1;
      opacity: 0.5;
      font-weight: bold;
      font-size: 1rem;
      letter-spacing: 0.2rem;
      margin-top: 1rem;
    }
  }
  .tier-avail {
    td {
      flex: 1;
    }
  }
`;
