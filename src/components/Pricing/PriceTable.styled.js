import styled from 'styled-components';

export const StyledPriceTable = styled.table`
  width: 100%;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  caption {
    text-align: left;
    padding-bottom: 2.3rem;
    margin-bottom: 2.3rem;
    border-bottom: 1px solid #000;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
  }
  thead {
    tr:first-child {
      border-bottom: 1px solid #000;
      padding-bottom: 2rem;
    }
  }
  tbody {
    display: flex;
    flex-direction: column;
    padding: 2.4rem 0;
    border-bottom: 1px solid lightgray;

  }
  tr {
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

  /*  MEDIA QUERIES  */
  @media (max-width: 767px) {
    caption {
      display: none;
    }
    .tier-heading {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .mobile-caption {
      display: none;
    }
    .caption {
      font-size: 4rem;
      letter-spacing: 0.4rem;
      line-height: 4.8rem;
      text-align: center;
      padding-bottom: 6rem;
      border-bottom: none;
    }
    .tier-name {
      display: none;
    }
    thead,
    tbody {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 2rem;
      tr:first-child {
        flex: 1;
      }
      tr:last-child {
        width: 60%;
        th,
        td {
          text-align: center;
        }
      }
    }
    thead {
      border-bottom: 1px solid #000;
      tr:first-child {
        border: none;
      }
    }
  }

  @media (min-width: 1200px) {
    max-width: 70%;
    margin: 0 auto 10rem;
    caption {
      margin-bottom: 0;
    }
  }
`;
