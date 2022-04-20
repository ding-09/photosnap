import styled from 'styled-components';

const StyledBorder = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 30%;
  height: 0.5rem;
  background: linear-gradient(
    to bottom left,
    rgb(var(--grd-blue)),
    rgb(var(--grd-purple)),
    rgb(var(--grd-orange))
  );

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    left: 0;
    max-width: 0.6rem;
    height: 100%;
  }
`;


const MainBorder = () => {
    return (
        <StyledBorder>
            
        </StyledBorder>
    )
}

export default MainBorder
