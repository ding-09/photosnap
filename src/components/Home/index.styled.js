import styled from 'styled-components';

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  .main-content .sub-details {
    .text-details {
      padding: 7rem 3rem;
      h2 {
        max-width: 85%;
        font-size: 3.2rem;
        letter-spacing: 0.3rem;
        line-height: 4rem;
        text-transform: uppercase;
      }
      p {
        margin: 1.5rem 0 2rem;
      }
      a span {
        padding-right: 2.6rem;
      }
    }
  }

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    .main-content {
      section:first-child {
        min-height: 65rem;
        figure {
          img {
            height: 100%;
          }
        }
      }
      section.sub-details {
        display: flex;
        flex-direction: row;
        min-height: 60rem;
        figure {
          min-width: 27rem;
        }
        &:last-child {
          .text-details h2 {
            margin-right: 20%;
          }
          figure {
            order: 2;
          }
        }
        .text-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 5.4rem;
          h2 {
            font-size: 4rem;
            line-height: 4.8rem;
            letter-spacing: 0.4rem;
            margin-right: 30%;
          }
          p {
            margin: 2rem 0 4.8rem;
          }
        }
      }
    }
  }
`;
