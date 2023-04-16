import {
  // Button,
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  CardImg,
  Col,
  FormGroup,
  Label,
  Row
} from 'reactstrap'


import { useAppSelector } from '../../../store/store'
import './style.css'
import EditButtons from '../../../components/EditButtons'

interface Props {
  state: {
    id?: number | null
    name: string
    descriptions: string
  }
  getTechUnique: (id: number) => void
  deleteTech: (id: number) => void
  enabledTech: (id: number) => void
}

function UpdateAndDelete({ state, deleteTech, getTechUnique, enabledTech }: Props) {

  const Tech = useAppSelector(state => state.tech)

  return (
    <div>
      <Row className='mt-3 text-center'>
        <Label className='display-6 text-black'>Update and Delete Tech</Label>
      </Row>
      <CardGroup className='text-black'>
        {
          Tech?.tech?.map(item => (
            <Col key={item.id} sm='3' className=''>
              <Card style={{}}
                className='text-center m-2 cards-tech'
              >
                <CardHeader>
                  <Label>{item.name}</Label>
                </CardHeader>
                <CardBody
                  style={{ height: 'auto' }}
                >
                  <CardImg
                    alt={`Image of ${item.name}`}
                    src={item.url}
                    width='25%'
                    className='w-25 rounded-circle'
                  />
                  <FormGroup className='mt-3 border rounded p-2'>
                    <Label>
                      {item.descriptions}
                    </Label>
                  </FormGroup>
                </CardBody>
                <EditButtons item={item} deleted={deleteTech} getUnique={getTechUnique} enabled={enabledTech} />
              </Card>
            </Col>
          ))
        }
      </CardGroup>

    </div>
  )
}

export default UpdateAndDelete