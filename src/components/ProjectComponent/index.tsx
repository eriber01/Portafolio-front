import React from 'react'
import { FormGroup } from 'reactstrap'
import { Project } from '../../store/slice/Project/projectSlice'
import EditButtons from '../EditButtons'

interface Props {
  isDashboard: boolean,
  state: Project,
  enabledProject: (id: number) => void
  deleteProject: (id: number) => void
  getUnique: (id: number) => void
}
const ProjectComponent = ({ state, isDashboard, enabledProject, deleteProject, getUnique }: Props) => {

  console.log(state);

  return (
    <div className={`card-project text-center p-2 ${isDashboard ? 'shadow-lg' : ''}`}>
      <div className='mb-3 project-name'>
        <span className='border-bottom'>{state.name}</span>
      </div>
      <div className='w-100 img-container'>
        <img className='w-50' src={state.img} alt={state.name} />
      </div>
      <div className='body mt-3 mb-3'>
        <div className='border rounded p-3'>
          <span>
            {
              state.descriptions
            }
          </span>
        </div>
        <div className='tech-container  mt-3'>
          <div className='tech'>
            {
              state.techData?.map(item =>
                <img key={item.id} className='w-25 m-2' src={item.url} alt="" />
              )
            }
          </div>
        </div>
        <div>
          {
            isDashboard ?
              <EditButtons
                item={{ id: state.id, enabled: state.enabled }}
                enabled={enabledProject}
                deleted={deleteProject}
                getUnique={getUnique}
              />
              :

              <FormGroup className='d-flex justify-content-evenly mt-3'>
                <a className='btn btn-outline-primary' href={state?.gitUrl} target={'_blank'} rel='noreferrer'>view Code</a>
                <a className='btn btn-outline-success' href={state.url} target={'_blank'} rel='noreferrer'>View Demo</a>
              </FormGroup>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent