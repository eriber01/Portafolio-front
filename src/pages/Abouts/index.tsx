import { useState } from 'react'
import AboutCard from '../../components/AboutCard'
import { StateData } from '../../interfaces'
import { useAppSelector } from '../../store/store'
import './style.css'
const About = ({ state, onChange }: StateData) => {

  const [classState, setClassState] = useState('')

  const profile = useAppSelector(state => state.profile)

  return (
    <div className='h-100 about overflow-hidden'>

      <h3 className='text'>ABOUT ME</h3>

      <div className='card-container-1'>

        <div className={`cards-about card-animate ${classState === 'pro' ? 'active' : 'inactive'}`}>
          <AboutCard
            name='Programming'
            role='Work and Hobby'
            type='pro'
            img='img/programacion.png'
            text={profile?.aboutProgramming || ''}
            classState={classState}
            setClassState={setClassState}
          />
        </div>

        <div className={`cards-about card-animate ${classState === 'game' ? 'active' : 'inactive'}`}>
          <AboutCard
            name='Gaming'
            role='Hobby'
            type='game'
            img='img/gaming.png'
            text={profile?.aboutGaming || ''}
            classState={classState}
            setClassState={setClassState}
          />
        </div>
      </div>

      <div className='card-container-2'>

        <div className={`cards-about card-animate ${classState === 'series' ? 'active' : 'inactive'}`}>

          <AboutCard
            name='Series'
            role='Hobby'
            type='series'
            img='img/tv.png'
            text={profile?.aboutSeries || ''}
            classState={classState}
            setClassState={setClassState}
          />

        </div>

      </div>
    </div>
  )
}

export default About