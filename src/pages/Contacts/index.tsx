import React from 'react'
import './style.css'
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { useAppSelector } from '../../store/store';
import { useActions } from './useActions';

const Contact = () => {

  const [{ state }, { onChange, onSave }] = useActions()

  const profile = useAppSelector(state => state.profile)

  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-form d-flex flex-column h-100 justify-content-evenly'>
          <span className='label-form h3 mt-2'>Send me a Message</span>
          <div className='d-flex flex-column align-items-start ps-3 px-3'>
            <label htmlFor="name">Name</label>
            <input
              className=' w-100'
              type="text" name="" id="name"
              placeholder='Enter your Name or your Company Name'
              value={state?.name || ''}
              onChange={({ target: { value } }) => onChange(value, 'name')}
            />
          </div>
          <div className='d-flex flex-column align-items-start ps-3 px-3'>
            <label htmlFor="email">Email</label>
            <input className=' w-100' type="email" name="" id="email"
              placeholder='Enter your Email or your Company Email'
              value={state?.email || ''}
              onChange={({ target: { value } }) => onChange(value, 'email')}
            />
          </div>
          <div className='d-flex flex-column align-items-start ps-3 px-3'>
            <label htmlFor="message">Message</label>
            <textarea className=' w-100' name="" id="message"
              placeholder='Enter the Message'
              value={state?.message || ''}
              onChange={({ target: { value } }) => onChange(value, 'message')}
            ></textarea>
          </div>
          <div className='message-submit'>
            <button
              onClick={() => onSave()}
              className='btn btn-success w-50'>Send Message</button>
          </div>
        </div>
        <div className='contact-info d-flex flex-column h-100 ps-3 px-3'>
          <div className='d-flex flex-column contact-me'>
            <span className='label-contact h3 text-black'>Contact Me</span>
            <span>If you want to contact me and know more about my work write me</span>
          </div>
          <div className='d-flex flex-column justify-content-evenly h-50'>
            <div>
              <ImLocation2 className='border rounded-circle icons' size={40} />
              <span><strong>Address: </strong> Dominican Republic</span>
            </div>
            <div>
              <BsTelephoneFill className='border rounded-circle icons' size={40} />
              <span><strong>Phone: </strong>{profile?.phone || ''}</span>
            </div>
            <div>
              <FaTelegramPlane className='border rounded-circle icons' size={40} />
              <span><strong>Email: </strong>{profile?.email || ''}</span>
            </div>
            <div>
              <AiFillGithub className='border rounded-circle icons' size={40} />
              <span><strong>GitHub: </strong>{profile?.github || ''}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact