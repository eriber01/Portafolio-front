import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Tech } from '../../../store/slice/Tech/techSlice'

interface Props {
  state: Tech
  onChange: (value: any, path: string) => void
  onSave: () => void
}

const Created = ({ state, onChange, onSave }: Props) => {

  // const [{ state }, { onChange, onSave }] = useActions()

  console.log(state);

  return (
    <div className='text-black ms-4 mx-4'>
      <Row className='mt-3 text-center'>
        <Label className='display-6'>Created Tech</Label>
      </Row>
      <Form>
        <Row>
          <Col sm='5'>
            <FormGroup>
              <Label>Name</Label>
              <Input
                value={state?.name || ''}
                onChange={({ target: { value } }) => onChange(value, 'name')}
              />
            </FormGroup>
          </Col>
          <Col sm='5'>
            <FormGroup>
              <Label>Tech Image</Label>
              <Input
                type='file'
                name='file'
                // value={state?.tech?.techImg || ''}
                onChange={({ target: { files } }) => onChange(files, 'techImg')}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm='5'>
            <FormGroup>
              <Label>Descriptions</Label>
              <Input
                type='textarea'
                value={state?.descriptions || ''}
                onChange={({ target: { value } }) => onChange(value, 'descriptions')}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col>
            <Button
              className='btn btn-success'
              // disabled={!state?.tech.name.trim() && !state?.tech.description.trim() && state?.tech.techImg.length ? false : true}
              onClick={() => onSave()}
            >
              {state.id ? 'Update' : 'Save'}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Created