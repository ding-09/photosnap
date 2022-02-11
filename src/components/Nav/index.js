import { NavLink } from 'react-router-dom';
import {StyledNav} from './Nav.styled'

const index = () => {
  return (
    <StyledNav>
      <ul>
        <li className='mobile-only'>
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
    </StyledNav>
  );
};

export default index;
