import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

interface Size {
  size: number
}

const SocialButtons = ({ size }: Size) => {

  console.log(size);


  return (
    <div className='d-flex justify-content-between' style={{ zIndex: 30 }}>
      <a className='ms-4' target="_blank" rel='noreferrer' href="https://web.facebook.com/eriber.tejedaamparo">
        <FaFacebookF color='white' size={size} />
      </a>
      <a className='ms-4' href="https://www.instagram.com/eribertejeda/" target={'_blank'} rel='noreferrer'>
        <FaInstagram color='white' size={size} />
      </a>
      <a className='ms-4' href="https://www.linkedin.com/in/eriber-tejeda-amparo/" target={'_blank'} rel='noreferrer'>
        <FaLinkedinIn color='white' size={size} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=8094339691&text=Hello" target={'_blank'} rel='noreferrer'>
        <FaWhatsapp className='ms-4' color='white' size={size} />
      </a>
    </div>
  )
}

export default SocialButtons