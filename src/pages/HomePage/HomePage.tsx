import React from 'react'
import CvAndGitButtons from '../../components/CvAndGitButtons'
import SocialButtons from '../../components/SocialButtons'
import { StateData } from '../../interfaces'
import { useAppSelector } from '../../store/store'
import './style.css'
import { Profile } from '../../store/slice/Profile/profileSlice'
import Typewriter from 'typewriter-effect';


const HomePage = ({ state, onChange }: StateData) => {

  const profile: Profile = useAppSelector(state => state.profile)

  console.log('profile: ', profile);

  return (
    <>
      {!profile?.profileLoading ?
        <div className='homes' style={{ backgroundColor: '#3C4048' }}>
          {
            state.viewActive === 'home' ?
              <div className="area" style={{ zIndex: 1 }}>
                <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div >
              : null
          }
          <div className='home-text-img-container' style={{ zIndex: 30 }}> {/* div for the name en Me  */}
            <div className='home-text'>
              {/* <TextTypeWriter text1={profile?.name || ''} text2={profile?.position || ''} twoText={true} /> */}

              <h1 className="display-4">
                <Typewriter
                  options={{ loop: true }}
                  onInit={(writer) => {
                    writer.typeString(profile?.name || 'adasd')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(profile?.position || 'asdasd')
                      .start()
                  }}
                />
              </h1>

              <span style={{ fontSize: '18px' }}>
                {profile?.descriptions || ''}
              </span>
            </div>
          </div>
          {
            state.viewActive === 'home' ?
              <div className='home-img'>
                <img src="/img/home.jpg" alt="" />
              </div> : null
          }
          <div className="d-flex text-center w-100 justify-content-start ps-5 button-home"> {/* buttons for home */}
            <CvAndGitButtons />
          </div>
          <div className="d-flex flex-row justify-content-lg-start align-items-end social-button"> {/* social area */}
            <SocialButtons size={20} />
          </div>
        </div>
        : null
      }
    </>
  )
}

export default HomePage