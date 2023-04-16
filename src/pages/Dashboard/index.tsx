import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { VscProject } from "react-icons/vsc";
import { GiTechnoHeart } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import './style.css'
import { useNavigate } from 'react-router-dom';
import DashboardPageManage from '../../components/DashboardPageManage';
import { useActions } from './useActions';
import { toggle } from '../../store/slice/Auth/authSlice';
import { useAppDispatch } from '../../store/store';


const Dashboard = () => {
  const [{ state }, { onChangeNav }] = useActions()
  const dispatch = useAppDispatch()
  const history = useNavigate()

  console.log(state);



  return (
    <div className='dashboard-containers'>
      <div className={`dashboard-navigation ${state?.toggle ? 'actives' : ''}`}>
        <ul>
          <li onClick={() => { onChangeNav('toggle', !state?.toggle) }}>
            <label >
              <span className='icons-nav'> <AiOutlineMenu color='white' size={23} /></span>
              <span className='title'>Dashboard</span>
            </label>
          </li>
          <li onClick={() => history('/')}>
            <label>
              <span className='icons-nav'><AiOutlineHome size={23} /></span>
              <span className='title'>Home</span>
            </label>
          </li>
          <li
            onClick={() => { onChangeNav('tabActive', 1) }}
            className={state?.tabActive === 1 ? 'hovered' : ''}>
            <label>
              <span className='icons-nav'><BiUserCircle size={23} /></span>
              <span className='title'>Profile</span>
            </label>
          </li>
          <li
            onClick={() => { onChangeNav('tabActive', 2) }}
            className={state?.tabActive === 2 ? 'hovered' : ''}>
            <label>
              <span className='icons-nav'><VscProject size={23} /></span>
              <span className='title'>Project</span>
            </label>
          </li>
          <li
            onClick={() => { onChangeNav('tabActive', 3) }}
            className={state?.tabActive === 3 ? 'hovered' : ''}
          >
            <label>
              <span className='icons-nav'><GiTechnoHeart size={23} /></span>
              <span className='title'>Tech</span>
            </label>
          </li>
          <li
            onClick={() => { onChangeNav('tabActive', 4) }}
            className={state?.tabActive === 4 ? 'hovered' : ''}
          >
            <label>
              <span className='icons-nav'><MdWorkOutline size={23} /></span>
              <span className='title'>Experience</span>
            </label>
          </li>
          <li onClick={() => {
            sessionStorage.removeItem('token')
            dispatch(toggle({ data: { isLogin: false, isOpen: false } }))
            history('/')
          }}>
            <label>
              <span className='icons-nav'><FiLogOut size={23} /></span>
              <span className='title'>Log out</span>
            </label>
          </li>
        </ul>
      </div>
      <div className={`dashboard-body-container ${state?.toggle ? 'actives' : ''}`}>
        <div className="dashboard-body">
          <DashboardPageManage keys={state?.tabActive} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard