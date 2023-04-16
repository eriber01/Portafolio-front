import React from 'react'
import { useAppSelector } from '../../store/store'

const CvAndGitButtons = () => {

  const profile = useAppSelector(state => state.profile)

  console.log(profile);
  

  return (
    <div className='d-flex' style={{ zIndex: 30 }}>
      <div className="mx-1">
        <a
          href={profile?.github || ''} target='_blank'
          className="btn btn-outline-primary p-2" style={{ color: '#EAEAEA' }}
          rel='noreferrer'
        >GitHub Page</a>
      </div>
      <div className="ms-1">
        <a
          href={profile?.cvUrl || ''}
          target='_blank'
          rel='noreferrer'
          className="btn btn-outline-success p-2" style={{ color: '#EAEAEA' }}
        >Download CV</a>
      </div>
    </div>
  )
}

export default CvAndGitButtons