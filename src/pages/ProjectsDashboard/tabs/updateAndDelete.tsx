import React from 'react'
import { CardGroup, Label, Row } from 'reactstrap'
import { useAppSelector } from '../../../store/store'
import ProjectComponent from '../../../components/ProjectComponent';
import { Project } from '../../../store/slice/Project/projectSlice';

interface Props {
  getUnique: (id: number) => void
  deleteProject: (id: number) => void
  enabledProject: (id: number) => void
}

function UpdateAndDelete({ enabledProject, deleteProject, getUnique }: Props) {

  const projects: Project[] = useAppSelector(state => state.projects.projects)

  console.log('projects: ', projects);


  return (
    <div className='text-black ms-4 mx-4'>
      <Row className='text-center mt-3'>
        <Label className='display-6 text-black'>Update and Delete Project</Label>
      </Row>

      <CardGroup>

        {
          projects.map(item =>
            <ProjectComponent
              key={item.id}
              state={item}
              isDashboard={true}
              enabledProject={enabledProject}
              deleteProject={deleteProject}
              getUnique={getUnique}
            />

          )
        }
      </CardGroup>
    </div>
  )
}

export default UpdateAndDelete