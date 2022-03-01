import styled from 'styled-components';

export const StyledPriceTable = styled.table`
  width: 100%;
  text-align: left;
  text-transform: uppercase;
  caption {
    text-align: left;
    padding-bottom: 2.3rem;
    border-bottom: 1px solid #000;
  }
  .tier-name{
    display: flex;
    td {
      flex: 1;
      position: relative;
    }
  }
`;
