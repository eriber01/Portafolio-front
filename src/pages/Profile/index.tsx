import React from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { onChange, Profile } from '../../store/slice/Profile/profileSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { validateForm } from '../../utils/validateForm'
import { useActions } from './useActions'

const Profiles = () => {

  const { onSave } = useActions()

  const profile: Profile = useAppSelector(state => state.profile)
  const dispatch = useAppDispatch()

  console.log('profile: ', profile);


  return (
    <div className='text-black ms-4 mx-4'>
      <Row className='text-center mt-3'>
        <Label className='display-6 text-black'>Profile</Label>
      </Row>

      <Row>
        <Col sm='5'>
          <FormGroup>
            <Label>Name</Label>
            <Input
              value={profile?.name || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'name', value }))}
            />
          </FormGroup>
        </Col>

        <Col sm='5'>
          <FormGroup>
            <Label>Position</Label>
            <Input
              value={profile?.position || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'position', value }))}
            />
          </FormGroup>
        </Col>
        <Col sm='5'>
          <FormGroup>
            <Label>Description</Label>
            <Input
              type='textarea'
              value={profile?.descriptions || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'descriptions', value }))}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='2'>
          <FormGroup>
            <Label>Email</Label>
            <Input
              value={profile?.email || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'email', value }))}
            />
          </FormGroup>
        </Col>
        <Col sm='2'>
          <FormGroup>
            <Label>Phone</Label>
            <Input
              value={profile?.phone || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'phone', value }))}
            />
          </FormGroup>
        </Col>
        <Col sm='3'>
          <FormGroup>
            <Label>GitHub</Label>
            <Input
              value={profile?.github || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'github', value }))}
            />
          </FormGroup>
        </Col>
        <Col sm='5'>
          <FormGroup>
            <Label>Linkedin</Label>
            <Input
              value={profile?.linkedin || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'linkedin', value }))}
            />
          </FormGroup>
        </Col>
        <Col sm='5'>
          <FormGroup>
            <Label>CV Url</Label>
            <Input
              value={profile?.cvUrl || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'cvUrl', value }))}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='4'>
          <FormGroup>
            <Label>
              About Programming
            </Label>
            <Input
              style={{ height: '120px' }}
              type='textarea'
              value={profile?.aboutProgramming || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'aboutProgramming', value }))}
            />
          </FormGroup>
        </Col>
        <Col sm='4'>
          <FormGroup>
            <Label>
              About Gaming
            </Label>
            <Input
              style={{ height: '120px' }}
              type='textarea'
              value={profile?.aboutGaming || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'aboutGaming', value }))}
            />
          </FormGroup>
        </Col>
        <Col sm='4'>
          <FormGroup>
            <Label>
              About Series
            </Label>
            <Input
              style={{ height: '120px' }}
              type='textarea'
              value={profile?.aboutSeries || ''}
              onChange={({ target: { value } }) => dispatch(onChange({ path: 'aboutSeries', value }))}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Button
            className='btn btn-success mb-5'
            onClick={() => onSave() /* validateForm(profile, 'profile') */}
          >
            Save Profile
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Profiles