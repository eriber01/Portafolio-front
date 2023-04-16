import React from 'react'

interface aboutProps {
  name: string
  role: string
  text: string
  classState: string
  setClassState: React.Dispatch<React.SetStateAction<string>>
  type: string
  img: string
}

const AboutCard = ({ name, role, type, text, img, classState, setClassState }: aboutProps) => {
  return (
    <>
      <div className="card-top-part">
        <div className="left-part">
          <div className="user-name">
            <p className="name">{name}</p>
            <p className="role">{role}</p>
          </div>
          <div className="user-position">
            <p className="position">
              {text}
            </p>
          </div>
        </div>
        <div className="right-part">
          <div className="user-photo">
            <img src={img} alt='logo' className="photo" />
          </div>
        </div>
      </div>
      <div className='more-container'>
        {
          classState === type ?
            <button onClick={() => {
              setClassState('')
            }
            } className="no-more"> Close </button>
            :
            <button onClick={() => {
              setClassState(type)
            }
            } className="more"> View More </button>
        }
      </div>
    </>
  )
}

export default AboutCard