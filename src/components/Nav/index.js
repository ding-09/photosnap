import { NavLink } from 'react-router-dom';
import { StyledNav } from './index.styled';
import { RectangleButton } from '../../styles/Buttons';

const index = () => {
  return (
    <StyledNav>
      <ul>
        <li id='footer-only'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='stories'>Stories</NavLink>
        </li>
        <li>
          <NavLink to='features'>Features</NavLink>
        </li>
        <li>
          <NavLink to='pricing'>Pricing</NavLink>
        </li>
      </ul>
      <RectangleButton innerText='Get an invite'/>
    </StyledNav>
  );
};

export default index;
