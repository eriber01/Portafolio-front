import React from 'react'
import { Button } from 'reactstrap'
import './style.css'
import { useNavigate } from 'react-router-dom'
const Page404 = () => {
  const history = useNavigate()
  return (
    <div className='page-404'>
      <div className='home-404-buttons'>
        <Button
          onClick={ () => history('/')}
          className='shadow border-0' 
        >
          Go to Home
        </Button>
      </div>
    </div>
  )
}

export default Page404