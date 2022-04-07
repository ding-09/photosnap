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
`;


const MainBorder = () => {
    return (
        <StyledBorder>
            
        </StyledBorder>
    )
}

export default MainBorder
