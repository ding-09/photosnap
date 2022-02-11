import { NavLink } from 'react-router-dom';

const index = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default index;
