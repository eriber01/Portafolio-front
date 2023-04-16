import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

const Created = () => {
  return (
    <div className='text-black ms-4 mx-4'>
      <Row className='text-center'>
        <Label className='display-6'>Created Experience</Label>
      </Row>
      <Row>
        <Col sm='5'>
          <FormGroup>
            <Label>Company Name</Label>
            <Input />
          </FormGroup>
        </Col>
        <Col sm='2'>
          <FormGroup>
            <Label>Time in the Company Years</Label>
            <Input
              type='number'
              min={0}
              onChange={({ target: { value } }) => console.log(value)
              }
            />
          </FormGroup>
        </Col>
        <Col sm='2'>
          <FormGroup>
            <Label>Time in the Company Month</Label>
            <Input
              max={11}
              min={0}
              type='number'
              onChange={({ target: { value } }) => console.log(value)
              }
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='5'>
          <FormGroup>
            <Label>Descriptions</Label>
            <Input
              type='textarea' />
          </FormGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Created