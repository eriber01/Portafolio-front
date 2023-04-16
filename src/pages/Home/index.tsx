import { useState } from 'react'
import LoginModal from '../../components/LoginModal'
import Menu from '../../components/Menu'
import PageChangesButtons from '../../components/PageChangesButtons'
import { State } from '../../interfaces'
import About from '../Abouts'
import Contact from '../Contacts'
import HomePage from '../HomePage/HomePage'
import Project from '../Projects'

const Home = () => {
  const [state, setState] = useState<State>({
    openMenu: false,
    viewActive: 'home'
  })

  const onChange = (path: string, value: string | boolean) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  const onChangeViews = (path: string, value: string | boolean) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  console.log(state);

  ///usa una clase y el display none con transition
  return (
    <div className='overflow-hidden' style={{ height: '100vh' }}>
      <Menu state={state} onChange={onChangeViews} />
      <div id='home' className='' style={{ backgroundColor: '#3C4048', height: '100vh' }}>
        <LoginModal />
        <HomePage state={state} onChange={onChange} />
      </div>
      <div id='about' style={{ backgroundColor: 'black', height: '100vh' }}>
        <About state={state} onChange={onChange} />
      </div>
      <div id='project' style={{ backgroundColor: 'white', height: '100vh' }}>
        <Project state={state} onChange={onChange} />
      </div>
      <div id='contact' style={{ height: '100vh' }}>
        <Contact />
      </div>
      <div>
        <PageChangesButtons state={state} onChange={onChange} />
      </div>
    </div>
  )
}

export default Home