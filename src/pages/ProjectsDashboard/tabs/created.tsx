import React from 'react'
import ReactSelect from 'react-select'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { Project } from '../../../store/slice/Project/projectSlice'
import { useAppSelector } from '../../../store/store'

interface techs {
  id: number | null;
  name: string;
}

interface Props {
  state: Project
  onChange: (value: any, path: string) => void
  techSelected: {
    id: number | null;
    name: string;
  }
  addTechs: () => void
  tech: techs[],
  deleteTechs: (id: number) => void
  onSave: () => void
}

const Created = ({ state, onChange, techSelected, addTechs, tech, deleteTechs, onSave }: Props) => {

  const Tech = useAppSelector(state => state.tech)

  console.log("Tech: ", Tech);

  console.log('stateasdas : ', state);


  return (
    <div className='text-black ms-4 mx-4'>
      <Row className='text-center mt-3'>
        <Label className='display-6 text-black'>Created Project</Label>
      </Row>
      <Row >
        <Col sm='10'>
          <FormGroup>
            <Label>Name</Label>
            <Input
              onChange={({ target: { value } }) => onChange(value, 'name')}
              value={state?.name || ''}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='5'>
          <FormGroup>
            <Label>Description</Label>
            <Input
              style={{ height: '200px' }}
              type='textarea'
              value={state?.descriptions || ''}
              onChange={({ target: { value } }) => onChange(value, 'descriptions')}
            />
          </FormGroup>
        </Col>
        <Col sm='5'>
          <FormGroup>
            <Label>Url</Label>
            <Input
              value={state?.url || ''}
              onChange={({ target: { value } }) => onChange(value, 'url')}
            />
          </FormGroup>
          <FormGroup>
            <Label>Git Url</Label>
            <Input
              value={state?.gitUrl || ''}
              onChange={({ target: { value } }) => onChange(value, 'gitUrl')}
            />
          </FormGroup>
          <FormGroup>
            <Label>Image</Label>
            <Input
              placeholder='Select the Image Project'
              name='projectImg'
              type='file'
              onChange={({ target: { files } }) => onChange(files, 'projectImg')}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='5'>
          <FormGroup>
            <Label>
              Technologist
            </Label>
            <ReactSelect
              placeholder="Select a Tech"
              options={Tech.tech}
              value={techSelected.id ? techSelected : null}
              getOptionLabel={option => option.name}
              getOptionValue={option => option.id?.toString() || '0'}
              onChange={selected => {
                console.log(selected);
                onChange(selected, 'techSelected')
              }}
            />
          </FormGroup>
        </Col>

        <Col sm='5'>
          <Label>Add Tech</Label>
          <FormGroup>
            <Button
              disabled={techSelected.id ? false : true}
              className='btn btn-success'
              onClick={() => addTechs()}
            >
              Add
            </Button>
          </FormGroup>
        </Col>
      </Row>

      <Row className='mt-5 mb-5'>
        <Col>
          <table className='table'>
            <thead className='thead-dark bg-dark text-white'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col' style={{ width: '90%' }}>Name</th>
                <th scope='col' style={{ width: '5%' }}>Options</th>
              </tr>
            </thead>
            <tbody>
              {
                tech?.map((item, index) => (
                  <tr key={index}>
                    <th scope='row'>
                      {index + 1}
                    </th>
                    <td>{item.name}</td>
                    <td>
                      <Button
                        className='btn btn-danger'
                        onClick={() => deleteTechs(item?.id || 0)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Col>
      </Row>
      <Row className=''>
        <Col>
          <Button
            className='btn btn-success mb-5'
            onClick={() => onSave()}
          >
            {state.id ? 'Update' : 'Save'}
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Created