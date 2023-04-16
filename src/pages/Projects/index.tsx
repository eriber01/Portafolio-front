import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { StateData } from '../../interfaces';
import './style.css'

import ProjectComponent from '../../components/ProjectComponent';
import { useAppSelector } from '../../store/store';
// import { Project } from '../../store/slice/Project/projectSlice';

const Project = ({ state, onChange }: StateData) => {

  const project = useAppSelector(state => state?.projects?.projects)

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  console.log('project: ', project);

  const fn = () => { }


  // const items = [
  //   // {}
  //   // <ProjectComponent state={project} isDashboard={false} deleteProject={project} enabledProject={()} getUnique={()}/>
  //   <div className='card-project text-center p-2'>
  //     <div className='mb-2 project-name'>
  //       <span>{'Project Name Example 1'}</span>
  //     </div>
  //     <div className='w-100 img-container'>
  //       <img className='w-100' src="/img/home2.jpg" alt="" />
  //     </div>
  //     <div className='body'>
  //       <div>
  //         <span>
  //           App de tareas para Dev desarrollada en React BootStrack y
  //           firebase en este se pueden agregar las tarear finalizarlas
  //           cambiarlas de estado y borralas y estas solo pueden ser
  //           vistas por la persona que las creo
  //         </span>
  //       </div>
  //       <div className='tech-container  mt-3'>
  //         <div className='tech'>
  //           <img className='w-25 m-2' src="/img/logo/1.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/2.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/3.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/4.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/5.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/6.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/7.png" alt="" />
  //         </div>
  //       </div>
  //       <div>
  //         <FormGroup className='d-flex justify-content-evenly mt-3'>
  //           <a className='btn btn-outline-primary' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>view Code</a>
  //           <a className='btn btn-outline-success' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>View Demo</a>
  //         </FormGroup>
  //       </div>
  //     </div>
  //   </div>,
  //   <div className='card-project text-center p-2'>
  //     <div className='mb-2 project-name'>
  //       <span>{'Project Name Example 2'}</span>
  //     </div>
  //     <div className='w-100 img-container'>
  //       <img className='w-100' src="/img/home2.jpg" alt="" />
  //     </div>
  //     <div className='body'>
  //       <div>
  //         <span>
  //           App de tareas para Dev desarrollada en React BootStrack y
  //           firebase en este se pueden agregar las tarear finalizarlas
  //           cambiarlas de estado y borralas y estas solo pueden ser
  //           vistas por la persona que las creo
  //         </span>
  //       </div>
  //       <div className='tech-container  mt-3'>
  //         <div className='tech'>
  //           <img className='w-25 m-2' src="/img/logo/1.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/2.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/3.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/4.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/5.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/6.png" alt="" />
  //           <img className='w-25 m-2' src="/img/logo/7.png" alt="" />
  //         </div>
  //       </div>
  //       <div>
  //         <FormGroup className='d-flex justify-content-evenly mt-3'>
  //           <a className='btn btn-outline-primary' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>view Code</a>
  //           <a className='btn btn-outline-success' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>View Demo</a>
  //         </FormGroup>
  //       </div>
  //     </div>
  //   </div>,
  //   // <div className='card-project text-center p-2'>
  //   //   <div className='mb-2 project-name'>
  //   //     <span>{'Project Name Example 3'}</span>
  //   //   </div>
  //   //   <div className='w-100 img-container'>
  //   //     <img className='w-100' src="/img/home2.jpg" alt="" />
  //   //   </div>
  //   //   <div className='body'>
  //   //     <div>
  //   //       <span>
  //   //         App de tareas para Dev desarrollada en React BootStrack y
  //   //         firebase en este se pueden agregar las tarear finalizarlas
  //   //         cambiarlas de estado y borralas y estas solo pueden ser
  //   //         vistas por la persona que las creo
  //   //       </span>
  //   //     </div>
  //   //     <div className='tech-container  mt-3'>
  //   //       <div className='tech'>
  //   //         <img className='w-25 m-2' src="/img/logo/1.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/2.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/3.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/4.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/5.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/6.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/7.png" alt="" />
  //   //       </div>
  //   //     </div>
  //   //     <div>
  //   //       <FormGroup className='d-flex justify-content-evenly mt-3'>
  //   //         <a className='btn btn-outline-primary' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>view Code</a>
  //   //         <a className='btn btn-outline-success' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>View Demo</a>
  //   //       </FormGroup>
  //   //     </div>
  //   //   </div>
  //   // </div>,
  //   // <div className='card-project text-center p-2'>
  //   //   <div className='mb-2 project-name'>
  //   //     <span>{'Project Name Example'}</span>
  //   //   </div>
  //   //   <div className='w-100 img-container'>
  //   //     <img className='w-100' src="/img/home2.jpg" alt="" />
  //   //   </div>
  //   //   <div className='body'>
  //   //     <div>
  //   //       <span>
  //   //         App de tareas para Dev desarrollada en React BootStrack y
  //   //         firebase en este se pueden agregar las tarear finalizarlas
  //   //         cambiarlas de estado y borralas y estas solo pueden ser
  //   //         vistas por la persona que las creo
  //   //       </span>
  //   //     </div>
  //   //     <div className='tech-container  mt-3'>
  //   //       <div className='tech'>
  //   //         <img className='w-25 m-2' src="/img/logo/1.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/2.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/3.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/4.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/5.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/6.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/7.png" alt="" />
  //   //       </div>
  //   //     </div>
  //   //     <div>
  //   //       <FormGroup className='d-flex justify-content-evenly mt-3'>
  //   //         <a className='btn btn-outline-primary' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>view Code</a>
  //   //         <a className='btn btn-outline-success' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>View Demo</a>
  //   //       </FormGroup>
  //   //     </div>
  //   //   </div>
  //   // </div>,
  //   // <div className='card-project text-center p-2'>
  //   //   <div className='mb-2 project-name'>
  //   //     <span>{'Project Name Example'}</span>
  //   //   </div>
  //   //   <div className='w-100 img-container'>
  //   //     <img className='w-100' src="/img/home2.jpg" alt="" />
  //   //   </div>
  //   //   <div className='body'>
  //   //     <div>
  //   //       <span>
  //   //         App de tareas para Dev desarrollada en React BootStrack y
  //   //         firebase en este se pueden agregar las tarear finalizarlas
  //   //         cambiarlas de estado y borralas y estas solo pueden ser
  //   //         vistas por la persona que las creo
  //   //       </span>
  //   //     </div>
  //   //     <div className='tech-container  mt-3'>
  //   //       <div className='tech'>
  //   //         <img className='w-25 m-2' src="/img/logo/1.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/2.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/3.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/4.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/5.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/6.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/7.png" alt="" />
  //   //       </div>
  //   //     </div>
  //   //     <div>
  //   //       <FormGroup className='d-flex justify-content-evenly mt-3'>
  //   //         <a className='btn btn-outline-primary' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>view Code</a>
  //   //         <a className='btn btn-outline-success' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>View Demo</a>
  //   //       </FormGroup>
  //   //     </div>
  //   //   </div>
  //   // </div>,
  //   // <div className='card-project text-center p-2'>
  //   //   <div className='mb-2 project-name'>
  //   //     <span>{'Project Name Example'}</span>
  //   //   </div>
  //   //   <div className='w-100 img-container'>
  //   //     <img className='w-100' src="/img/home2.jpg" alt="" />
  //   //   </div>
  //   //   <div className='body'>
  //   //     <div>
  //   //       <span>
  //   //         App de tareas para Dev desarrollada en React BootStrack y
  //   //         firebase en este se pueden agregar las tarear finalizarlas
  //   //         cambiarlas de estado y borralas y estas solo pueden ser
  //   //         vistas por la persona que las creo
  //   //       </span>
  //   //     </div>
  //   //     <div className='tech-container  mt-3'>
  //   //       <div className='tech'>
  //   //         <img className='w-25 m-2' src="/img/logo/1.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/2.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/3.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/4.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/5.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/6.png" alt="" />
  //   //         <img className='w-25 m-2' src="/img/logo/7.png" alt="" />
  //   //       </div>
  //   //     </div>
  //   //     <div>
  //   //       <FormGroup className='d-flex justify-content-evenly mt-3'>
  //   //         <a className='btn btn-outline-primary' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>view Code</a>
  //   //         <a className='btn btn-outline-success' href="https://github.com/eriber01" target={'_blank'} rel='noreferrer'>View Demo</a>
  //   //       </FormGroup>
  //   //     </div>
  //   //   </div>
  //   // </div>
  // ];

  return (
    <div className='text-black' style={{ height: '100vh' }}>
      <div className='card-project-container overflow-hidden'>
        <AliceCarousel
          mouseTracking
          items={ /* items */
            project.map(item => (
              <ProjectComponent state={item} isDashboard={false} deleteProject={fn} enabledProject={fn} getUnique={fn} />
            ))
          }
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  )
}

export default Project