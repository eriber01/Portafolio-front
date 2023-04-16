import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi'
import { StateData } from '../../interfaces'
import './style.css'


const PageChangesButtons = ({ state, onChange }: StateData) => {

  const manageColor = state.viewActive === 'contact' ? '' : ''

  return (
    <div className='d-flex change-buttons-container' style={{ zIndex: 30 }}>
      <div className='d-flex mx-3 change-buttons' style={{ zIndex: 999 }}>
        {
          state.viewActive === 'home' ?
            <a href="#home" className='text-white' onClick={() => {
              onChange('viewActive', 'home')
            }}>
              <BiRadioCircleMarked color={manageColor} size={25} />
            </a>
            :
            <a href="#home" className='text-white' onClick={() => {
              onChange('viewActive', 'home')
            }}>
              <BiRadioCircle color={manageColor} size={25} />
            </a>
        }
        {
          state.viewActive === 'about' ?
            <a href="#about" className='text-white' onClick={() => {
              onChange('viewActive', 'about')
            }}>
              <BiRadioCircleMarked color={manageColor} size={25} />
            </a>
            :
            <a href="#about" className='text-white' onClick={() => {
              onChange('viewActive', 'about')
            }}>
              <BiRadioCircle color={manageColor} size={25} />
            </a>
        }
        {
          state.viewActive === 'project' ?
            <a href="#project" className='text-white' onClick={() => {
              onChange('viewActive', 'project')
            }}>
              <BiRadioCircleMarked color={manageColor} size={25} />
            </a>
            :
            <a href="#project" className='text-white' onClick={() => {
              onChange('viewActive', 'project')
            }}>
              <BiRadioCircle color={manageColor} size={25} />
            </a>
        }
        {
          state.viewActive === 'contact' ?
            <a href="#contact" className='text-white' onClick={() => {
              onChange('viewActive', 'contact')
              console.log('asdasd')

            }}>
              <BiRadioCircleMarked color={manageColor} size={25} />
            </a>
            :
            <a href="#contact" className='text-white' onClick={() => {
              onChange('viewActive', 'contact')
            }}>
              <BiRadioCircle color={manageColor} size={25} />
            </a>
        }

      </div>
    </div >
  )
}

export default PageChangesButtons