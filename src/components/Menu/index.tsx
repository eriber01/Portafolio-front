import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StateData } from '../../interfaces';
import LoginButtons from '../LoginButtons';
import './style.css'
import { useAppSelector } from '../../store/store';

const Menu = ({ state, onChange }: StateData) => {

  const [active, setActive] = useState(false)
  const auth = useAppSelector(state => state.auth)

  console.log('active: ', active);
  /* <a onClick={() => history('/dashboard')} style={{ cursor: 'pointer', color: 'black' }} > Dashboard</a> */


  return (
    <div className='menus'>
      <ul className={`navigations ${active ? 'actives' : ''}`}>
        <li>
          <a onClick={() => onChange('viewActive', 'home')} href='#home'>Home</a>
        </li>
        <li>
          <a onClick={() => onChange('viewActive', 'about')} href="#about">About</a>
        </li>
        <li>
          <a onClick={() => onChange('viewActive', 'project')} href="#project">Projects</a>
        </li>
        <li>
          <a onClick={() => onChange('viewActive', 'contact')} href="#contact">Contact</a>
        </li>
        <li>
          <LoginButtons />
        </li>
        {
          auth.isLogin ?
            <li>
              <Link to={'/dashboard'}>Dashboard</Link>
            </li> : null
        }
        <span onClick={() => setActive(!active)} className='toggleMenu'></span>
      </ul>
    </div >
  );
}

export default Menu;